import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  loggedIn;

  ngOnInit(): void {
    this.auth.loggedIn.subscribe(l=>this.loggedIn = l);
  }

  logOut() {
    this.auth.logOut();
    this.router.navigate(['/dashboard/menu']);
  }
}
