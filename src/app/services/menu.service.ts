import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  private url = 'https://psim-restaurant.herokuapp.com/api';

  getMenu(): Observable<any> {
    return this.http.get(`${this.url}/menu`);
  }

  getItem(id): Observable<any> {
    const opts = {
      headers: new HttpHeaders({
        'x-auth-token': `${this.auth.getToken()}`
      })
    }
    return this.http.get(`${this.url}/menu/${id}`,opts);
  }

  editItem(data, id): Observable<any> {
    const opts = {
      headers: new HttpHeaders({
        'x-auth-token': `${this.auth.getToken()}`
      })
    }
    return this.http.patch(`${this.url}/menu/${id}`,data,opts);
  }

  addItem(data): Observable<any> {
    const opts = {
      headers: new HttpHeaders({
        'x-auth-token': `${this.auth.getToken()}`
      })
    }
    return this.http.post(`${this.url}/menu`, data, opts);
  }

  removeItem(id): Observable<any> {
    const opts = {
      headers: new HttpHeaders({
        'x-auth-token': `${this.auth.getToken()}`
      })
    }
    return this.http.delete(`${this.url}/menu/${id}`, opts);
  }
}
