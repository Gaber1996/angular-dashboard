import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticationService } from 'app/services/authentacation/authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class LoginguardGuard implements CanActivate {
  constructor(private authenticationlogin: AuthenticationService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    
    // this.authenticationlogin.isLoggedSubject().subscribe((loggedStatus) => {
    //   if (loggedStatus) {
    //     console.log("LoginguardGuard",loggedStatus);  
    //     this.router.navigate(["dashboard"]);
    //   }
    // });
    // return true;
       if (this.authenticationlogin.isLoggedIn) {
         this.router.navigate(["dashboard"]);
       }
       return true;
  }
}
