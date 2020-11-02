import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtHelper} from 'angular2-jwt';

@Injectable()
export class AuthenticationService {
  private host = 'http://localhost:8082';
  private jwtToken : string;
  private roles:Array<any>=[];
  private username: string;

  constructor(private http: HttpClient) {
  }
  login(user) {
    return this.http.post(this.host + '/login', user, {observe: 'response'});
  }

  register(user){
    return this.http.post(this.host + '/users', user);
  }

  saveToken(jwt: string) {
    this.jwtToken = jwt;
    localStorage.setItem('token', jwt);
    let jwtHelper= new JwtHelper();
    this.roles = jwtHelper.decodeToken(this.jwtToken).roles;
    this.username = jwtHelper.decodeToken(this.jwtToken).username;


    console.log(this.username);
  }

  loadToken() {
    this.jwtToken = localStorage.getItem('token');
  }
 /* getTasks() {
    if (this.jwtToken == null) this.loadToken();
    return this.http.get(this.host + '/tasks',
      {headers: new HttpHeaders({'Authorization' : this.jwtToken})});
  }*/



  logout() {
    this.jwtToken = null;
    localStorage.removeItem('token');
  }

  isAdmin() {
    for (let r of this.roles){
      if(r.authority== 'ADMIN') { return true; }
    }
    return false;

  }
  isUser() {
    for (let r of this.roles){
      if(r.authority== 'USER') { return true; }
    }
    return false;

  }

}
