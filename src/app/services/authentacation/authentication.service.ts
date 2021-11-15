import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Adminlogin } from "app/Models/login/adminlogin";
import { Iproduct } from "app/Models/product/iproduct";
import { environment } from "environments/environment";
import { BehaviorSubject, Observable } from "rxjs";
import { first } from "rxjs/operators";


@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  private loggedStatusSubject = new BehaviorSubject(false);

  isLogged: boolean = false;
  private httpOptions = {};
  constructor(private httpClient: HttpClient, private router: Router) {
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiamFzbWluIiwidXNlcklkIjoiNjE4YzBkZmZhZThhYzM2MTUyNjY4ZGZhIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjM2ODI5ODEwLCJleHAiOjE2MzY5MTYyMTB9.oA3WoD9bE73Q_dr_HYyhj7OJrNNS4KepUJExOpG6BUg",
      }),
    };
  }

  // functions
  login(data: any): Observable<Adminlogin> {
    return this.httpClient.post<any>(environment.APIURL + "/auth/login", data);
  }

  logout(): Observable<Adminlogin> {
    return this.httpClient.get<any>(environment.APIURL + "/auth/logout");
  }

  loginx(x: any) {
    this.login(x).subscribe(
      (res) => {
        if (res.user.role == "admin") {
          localStorage.setItem("token", JSON.stringify(res.token));
          localStorage.setItem("userId", JSON.stringify(res.user.userId));
          this.loggedStatusSubject.next(true);
          this.router.navigate(["/dashboard"]);
        }
      },
      (err) => {
        alert("wrong password or email");
        this.router.navigate(["/login"]);
        console.log(err);
      }
    );
  }

  isLoggedSubject(): Observable<boolean> {
    return this.loggedStatusSubject;
  }

  get isLoggedIn(): boolean {
    const user = localStorage.getItem("userId");
    return user !== null ? true : false;
  }
}
