import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Adminlogin } from "app/Models/login/adminlogin";
import { environment } from "environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private httpOptions = {};
  admindata: Adminlogin;
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
  }

  //current user
  showCurrentUser(): Observable<any> {
    return this.httpClient.get<any>(
      environment.APIURL + "/users/showMe",
      this.httpOptions
    );
  }

  //admins
  getAllAdmins(): Observable<any> {
    return this.httpClient.get<any>(
      environment.APIURL + "/users/getAdmins",
      this.httpOptions
    );
  }
  //admins
  getSingleUser(id: string): Observable<any> {
    return this.httpClient.get<any>(
      environment.APIURL + "/users/" + id,
      this.httpOptions
    );
  }

  //get all users
  getAllUsers(): Observable<any> {
    return this.httpClient.get<any>(
      environment.APIURL + "/users",
      this.httpOptions
    );
  }
}
