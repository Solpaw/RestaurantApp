import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  form = new FormGroup({
    email: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  })

  ngOnInit(): void {
  }

  logIn() {
    const credentials = {email: this.form.get('email').value, password: this.form.get('password').value};
    this.auth.logIn(credentials)
      .subscribe(res=> {
        if(res.status == 200) {
          this.auth.setToken(res.data.accessToken);
          this.router.navigate(['/dashboard/menu']);
        } else {
          this.form.setErrors({
            invalidCred: true
          })
          return;
        }
      },err=>{
        if(err.status == 404) {
          this.form.setErrors({
            serverUna: true
          })
        } else {
          this.form.setErrors({
            invalidCred: true
          })
          return;
        }
      });
  }
}
