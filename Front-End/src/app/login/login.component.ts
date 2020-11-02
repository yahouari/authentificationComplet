/*
import { Component } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private linkedInCredentials = {
    clientId: '77ldm1lramoinn',
    client_secret: 'RKwWA1IBkTJQzr7r',
    redirectUrl: 'http://himy.ucx-digital.com'

  };
  constructor(private http: HttpClient) {}
  login() {
    window.location.href = `https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=${
      this.linkedInCredentials.clientId
    }&scope=r_liteprofile&redirect_uri=${this.linkedInCredentials.redirectUrl}`;
  }
}
*/

import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mode: number=0;


  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }
  onLogin(user) {
    this.authService.login(user)
      .subscribe(resp => {
          /*this.data = user;
          console.log(user);
          sessionStorage.setItem("username",this.data.username);
          this.username =  sessionStorage.getItem('username');
          console.log(this.username);
          this.getUser(this.username);*/

          let jwt = resp.headers.get('Authorization');
          console.log(resp.headers.get('Authorization'));
          this.authService.saveToken(jwt);
          this.router.navigateByUrl('/in');

          //  /tasks
        },
        error => {
          this.mode = 1;

        });

  }



}
