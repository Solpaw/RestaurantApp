import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  loggedIn;

  constructor(private auth: AuthService, private router: Router) { 
    router.events.subscribe(val=>{
      if(val instanceof NavigationEnd) {
        auth.changeLogInStatus(auth.isLoggedIn());
      }
    })
  }
  
  ngOnInit(): void {
    this.auth.loggedIn.subscribe(l=>this.loggedIn = l);
  }
}
