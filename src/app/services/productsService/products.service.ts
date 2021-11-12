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
  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
  }

  // functions
  getAllProducts(): Observable<Iproduct> {
    return this.httpClient.get<Iproduct>(environment.APIURL + "/products");
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
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          // 'utheoriztion 'token
        }),
      }
    );
  }

  DeleteProduct(id: number): Observable<{}> {
    return this.httpClient.delete<Iproduct>(
      `${environment.APIURL}/products/${id}`,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          // 'utheoriztion 'token
        }),
      }
    );
  }

  EditProduct(id: number, newprd: Iproduct): Observable<Iproduct> {
    return this.httpClient.put<Iproduct>(
      `${environment.APIURL}/products/${id}`,
      newprd,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          // 'utheoriztion 'token
        }),
      }
    );
  }
}
