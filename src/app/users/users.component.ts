import { Component } from '@angular/core';
import { FormBuilder ,FormGroup, Validators, FormControl } from "@angular/forms";
import { HttpClient, HttpErrorResponse, HttpEvent, HttpEventType } from "@angular/common/http";
import { saveAs } from "file-saver";
import { ProductsService } from 'app/services/productsService/products.service';
import { UserService } from 'app/services/user/user.service';


@Component({
  selector: "users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})

// constructor(private fb: FormBuilder) {}
export class UsersComponent {
  // variable
  users: any = {};
  UsersList: any = {};

  // constructor
  constructor(private userAPI: UserService) {}

  ngOnInit() {
    this.userAPI.getAllUsers().subscribe(
      (res) => {
        console.log(res.users);
        this.UsersList = res.users;
     
      },
      (err) => {
        console.log(err);
      }
    );
  }
}


