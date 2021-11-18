import { HttpClient, HttpEvent, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Form } from "@angular/forms";
import { Iproduct } from "app/Models/product/iproduct";
import { environment } from "environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  //constructor
  private httpOptions = {};
  private httpOptions1 = {};
  TcknfrmLocalStorage = localStorage
    .getItem("token")
    .slice(1, localStorage.getItem("token").length - 1);

  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        authorization: `Bearer ${this.TcknfrmLocalStorage}`,
      }),
    };

    this.httpOptions1 = {
      headers: new HttpHeaders({
        "Content-Type": "image/jpeg",
        authorization: `Bearer ${this.TcknfrmLocalStorage}`,
      }),
    };
  }

  // functions
  getAllProducts(): Observable<Iproduct> {
    return this.httpClient.get<Iproduct>(
      environment.APIURL + "/products",
      this.httpOptions
    );
  }

  // getCountProducts() {}

  getProductByID(prdID: string): Observable<Iproduct> {
    return this.httpClient.get<Iproduct>(
      environment.APIURL + "/products/" + prdID
    );
  }

  // getProductByCatID(cID: number): Observable<Iproduct[]> {
  //   return this.httpClient.get<Iproduct[]>(
  //     environment.APIURL + "/products?Categoryid=" + cID
  //   );
  // }

  addProduct(newprd: Iproduct): Observable<Iproduct | undefined> {
    return this.httpClient.post<Iproduct>(
      `${environment.APIURL}/products`,
      newprd,
      this.httpOptions
    );
  }

  DeleteProduct(id: number): Observable<{}> {
    return this.httpClient.delete<Iproduct>(
      `${environment.APIURL}/products/${id}`,
      this.httpOptions
    );
  }

  EditProduct(id: string, newprd: Iproduct): Observable<Iproduct> {
    return this.httpClient.patch<Iproduct>(
      `${environment.APIURL}/products/${id}`,
      newprd,
      this.httpOptions
    );
  }

  upload(body: FormData): Observable<any> {
    console.log("body", body);
    const formData = new FormData();
    //  formData.append("image", body , body.name);
    return this.httpClient.post(
      ` ${environment.APIURL}/products/uploadImage`,
      body,
      this.httpOptions1
    );
  }

  // define function to upload files
  upload1(formData: FormData): Observable<HttpEvent<string[]>> {
    return this.httpClient.post<string[]>(
      `localhost:5000/api/v1/products/uploadImage`,
      formData,
      {
        reportProgress: true,
        observe: "events",
      }
    );
  }

  // define function to download files
  // download(filename: string): Observable<HttpEvent<Blob>> {
  //   return this.http.get(`${this.server}/file/download/${filename}/`, {
  //     reportProgress: true,
  //     observe: "events",
  //     responseType: "blob",
  //   });
  // }
}
