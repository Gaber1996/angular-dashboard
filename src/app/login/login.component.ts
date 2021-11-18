import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticationService } from "app/services/authentacation/authentication.service";
import { BehaviorSubject, Observable } from "rxjs";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  id: number = 0;
  loginfrm: FormGroup;
  // prd!: Product;
  // prd2!: Product;


  constructor(
    private fb: FormBuilder,
    private authentacation: AuthenticationService,
    private router: Router
  ) {
    this.loginfrm = this.fb.group({
      email: ["", [Validators.required, Validators.minLength(5)]],
      password: ["", Validators.min(5)],
    });
  }

  onSubmit(): void {
    alert("Thanks!");
  }

  UpdateProduct() {
    // alert(this.loginfrm.controls["email"].value);
    console.log(this.loginfrm.value);
    console.log(this.loginfrm);
  }

  login(): void {
    this.authentacation.loginx(this.loginfrm.value)
  }



}


// .subscribe(
//       (res) => {
//         if (res.user.role == "admin") {
//           localStorage.setItem("token", JSON.stringify(res.token));
//           localStorage.setItem("userId", JSON.stringify(res.user.userId));
//           this.router.navigate(["/dashboard"]);
//         }
//       },
//       (err) => {
//         alert("wrong password or email");
//         this.router.navigate(["/login"]);
//         console.log(err);
//       }
//     );