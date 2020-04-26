import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient, private auth: AuthService) {}

  private url = 'https://psim-restaurant.herokuapp.com/api';

  getTables(): Observable<any> {
    const opts = {
      headers: new HttpHeaders({
        'x-auth-token': `${this.auth.getToken()}`
      })
    }
    return this.http.get(`${this.url}/tables`,opts);
  }

  addTable(data): Observable<any> {
    const opts = {
      headers: new HttpHeaders({
        'x-auth-token': `${this.auth.getToken()}`
      })
    }
    return this.http.post(`${this.url}/tables`,data,opts);
  }

  removeTable(id): Observable<any> {
    const opts = {
      headers: new HttpHeaders({
        'x-auth-token': `${this.auth.getToken()}`
      })
    }
    return this.http.delete(`${this.url}/tables/${id}`,opts);
  } 
}
