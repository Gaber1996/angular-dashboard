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
  constructor(private httpClient: HttpClient, private router: Router) {}

  // functions
  login(data: any): Observable<Adminlogin> {
    return this.httpClient.post<any>(environment.APIURL + "/auth/login", data);
  }

  loginx(x: any) {
    this.login(x).subscribe(
      (res) => {
        if (res.user.role == "admin") {
          localStorage.setItem("token", JSON.stringify(res.token));
          localStorage.setItem("userId", JSON.stringify(res.user.userId));
          this.router.navigate(["/dashboard"]);
          this.loggedStatusSubject.next(true);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  logout(): Observable<Adminlogin> {
    return this.httpClient.get<any>(environment.APIURL + "/auth/logout");
  }

  logoutx() {
    this.logout().subscribe(
      (res) => {
        console.log(res);
        // localStorage.clear();
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
         this.router.navigate(["/login"]);
        this.loggedStatusSubject.next(false);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  isLoggedSubject() {
    return this.loggedStatusSubject;
  }
  //service

        get isLoggedIn(): boolean {
    const user = localStorage.getItem("userId");
    return user !== null ? true : false;
  }
}
