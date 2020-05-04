import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  loggedIn;

  constructor(private auth: AuthService, private router: Router, private authService: AuthService) {
    this.auth.loggedIn.subscribe(l=>this.loggedIn = l);
  }

  canActivate() {
    if (this.loggedIn) return true;
    this.router.navigate(['dashboard/menu']);
    return false;
  }
}
