import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private url = 'https://psim-restaurant.herokuapp.com/api';

  private loggedInDef = new BehaviorSubject<boolean>(false);
  loggedIn = this.loggedInDef.asObservable();

  changeLogInStatus(status: boolean) {
    this.loggedInDef.next(status);
  }
  
  logIn(credentials): Observable<any> {
    return this.http.post(`${this.url}/auth`,credentials);
  }

  setToken(token) {
    sessionStorage.setItem('token', token);
  }

  getToken() {
    return sessionStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    const jwt = new JwtHelperService();
    const token = sessionStorage.getItem('token');
    return !jwt.isTokenExpired(token);
  }

  logOut() {
    sessionStorage.removeItem('token');
    this.changeLogInStatus(false);
  }
}
