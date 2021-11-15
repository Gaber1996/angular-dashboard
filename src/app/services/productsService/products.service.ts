import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
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
  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiamFzbWluIiwidXNlcklkIjoiNjE4YzBkZmZhZThhYzM2MTUyNjY4ZGZhIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjM2OTk0ODIyLCJleHAiOjE2MzcwODEyMjJ9.QL6Uqx8RrPt8EtpqnotXTJtWcGZc0ZrB2goZ4I6-Dz0",
      }),
    };

    this.httpOptions1 = {
      headers: new HttpHeaders({
        "Content-Type": ["image/jpeg", "image/png", "image/jpg", "image/ief"],
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiamFzbWluIiwidXNlcklkIjoiNjE4YzBkZmZhZThhYzM2MTUyNjY4ZGZhIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjM2OTk0ODIyLCJleHAiOjE2MzcwODEyMjJ9.QL6Uqx8RrPt8EtpqnotXTJtWcGZc0ZrB2goZ4I6-Dz0",
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

  getProductByID(prdID: number): Observable<Iproduct> {
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

  upload(body: File): Observable<any> {
    console.log("body", body);
    const formData = new FormData();
    formData.append("image", body);

    return this.httpClient.post(
      ` ${environment.APIURL}/products/uploadImage`,
      formData,
      this.httpOptions1
    );
  }
}
