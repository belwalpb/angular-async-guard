import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';
import { map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private authService: AuthServiceService) {};

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = "Bearer dijijijgidjwo3445";

      // Here The Problome is to provide access to only that use, for which id is 1.

      // Method-1 Using Pipe. (Recommended)
      /*

      return this.authService.checkIfUserIsAllowed(token)
      .pipe(map(res => res.id === 1));

      */

      //Method-2 canActivate also accepts a promise instead of observable.So
      return new Promise((resolve, reject) => {
        this.authService.checkIfUserIsAllowed(token)
        .subscribe(res => {
          if(res.id === 1) {
            resolve(true);
          }
          else {
            resolve(false);
          }
        })
      }) //Promise ends.
  }
  
}
