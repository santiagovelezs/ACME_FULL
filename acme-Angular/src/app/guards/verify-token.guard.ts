import { AccountService } from './../services/account.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerifyTokenGuard implements CanActivate {
  constructor(
    private authService: AccountService,
    private router: Router
    ){}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.authService.isLogged)
      this.router.navigate(['/login']);
    return this.authService.isLogged;
  }
  
}
