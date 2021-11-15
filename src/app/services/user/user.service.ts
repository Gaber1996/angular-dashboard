import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Adminlogin } from 'app/Models/login/adminlogin';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: "root",
})
export class UserService {
  private httpOptions = {};
  admindata: Adminlogin;

  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiamFzbWluIiwidXNlcklkIjoiNjE4YzBkZmZhZThhYzM2MTUyNjY4ZGZhIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjM2OTk0ODIyLCJleHAiOjE2MzcwODEyMjJ9.QL6Uqx8RrPt8EtpqnotXTJtWcGZc0ZrB2goZ4I6-Dz0",
      }),
    };
  }

  showCurrentUser(): Observable<any> {
    return this.httpClient.get<any>(
      environment.APIURL + "/users/showMe",
      this.httpOptions
    );
  }

  getSingleUser(id:string): Observable<any> {
    return this.httpClient.get<any>(
     environment.APIURL+'/users/'+id,
      this.httpOptions
    );
  }


}
