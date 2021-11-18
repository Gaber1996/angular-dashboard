import { Component, OnInit } from "@angular/core";
import { Adminlogin } from "app/Models/login/adminlogin";
import { UserService } from "app/services/user/user.service";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"],
})
export class UserProfileComponent implements OnInit {
  admindata: any = {};
  allAdmins: any = {};
  IDfrmLocalStorage = localStorage
    .getItem("userId")
    .slice(1, localStorage.getItem("userId").length - 1);

  constructor(private userAPI: UserService) {
    console.log("IDfrmLocalStorage", this.IDfrmLocalStorage);

    // this.admindata = {
    //   user: {name:'', userId:'',role:''},
    //   token: " ,",
    // };
  }

  ngOnInit() {
    this.userAPI.showCurrentUser().subscribe(
      (res) => {
        console.log(res.user, "kkk");
        this.admindata = res.user;
        console.log("this.admindata", this.admindata);
      },
      (err) => {
        console.log(err);
      }
    );

    //   this.userAPI.getSingleUser(this.IDfrmLocalStorage).subscribe(
    //     (res) => {
    //       console.log(res);
    //       this.allAdmins = res.user;
    //       // console.log("this.admindata", this.admindata);
    //     },
    //     (err) => {
    //       console.log(err);
    //     }
    //   );
    // }

    this.userAPI.getAllAdmins().subscribe(
      (res) => {
        console.log("resadmins", res);
        this.allAdmins = res.users;
        // console.log("this.admindata", this.admindata);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
