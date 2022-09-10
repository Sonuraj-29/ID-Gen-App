import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router : Router){}
  
  canActivate(): boolean {
    if(this.loggedIn()){
      return true;
    }
    else{
      alert('User not authorized')
      this.router.navigateByUrl('/books')
      return false
    }
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }
  
}
