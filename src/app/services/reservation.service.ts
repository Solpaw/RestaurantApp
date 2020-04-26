import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  private url = 'https://psim-restaurant.herokuapp.com/api';

  private reservationTime = 7200000;
  private openingTime: String = '09:00';
  private lastReservationTime: String = '20:00';

  getLastReservationTime() {
    return this.lastReservationTime;
  }

  getOpeningTime() {
    return this.openingTime;
  }

  getReservationTime() {
    return this.reservationTime;
  }

  makeReservation(data): Observable<any> {
    return this.http.post(`${this.url}/reservations`, data);
  }

  getReservationsUser(): Observable<any> {
    return this.http.get(`${this.url}/reservations`);
  }

  deleteReservation(id): Observable<any> {
    const opts = {
      headers: new HttpHeaders({
        'x-auth-token': `${this.auth.getToken()}`
      })
    }
    return this.http.delete(`${this.url}/reservations/${id}`,opts);
  }
}
