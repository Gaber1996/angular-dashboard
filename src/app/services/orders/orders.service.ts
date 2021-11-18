import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iorder } from 'app/Models/order/iorder';
import { Iproduct } from 'app/Models/product/iproduct';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
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

    // this.httpOptions1 = {
    //   headers: new HttpHeaders({
    //     "Content-Type": "image/jpeg",
    //     authorization: `Bearer ${this.TcknfrmLocalStorage}`,
    //   }),
    // };
  }

  // functions
  getAllOrders(): Observable<Iorder> {
    return this.httpClient.get<Iorder>(
      environment.APIURL + "/orders",
      this.httpOptions
    );
  }

  
}
