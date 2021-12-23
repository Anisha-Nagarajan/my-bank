import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  

  constructor(private _router: Router) { }  
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {  
      if (localStorage.getItem('isUserLoggedIn')) {  
          return true;  
      }  
      this._router.navigate(['']);  
      return false;  
  }  
}
