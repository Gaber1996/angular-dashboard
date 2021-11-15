import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticationService } from 'app/services/authentacation/authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private authenticationlogin: AuthenticationService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    
      if (this.authenticationlogin.isLoggedIn !== true) {
        this.router.navigate(["login"]);
      }
     return true;
  }

      //  if (this.authenticationlogin.isLoggedSubject()) {
      //    return true;
      //  } else {
      //   this.router.navigate(["login"]);
      //    return false;
      //  }
    }

