import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService) { }

  loggedIn;

  ngOnInit(): void {
    this.auth.loggedIn.subscribe(l=>this.loggedIn = l);
  }

  logOut() {
    this.auth.logOut();
  }
}
