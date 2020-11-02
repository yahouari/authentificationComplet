import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PasswordStrengthValidator} from '../test/password-strength.validators';
import {HttpClient} from '@angular/common/http';
declare const myfun: any;
@Component({
  selector: 'app-in',
  templateUrl: './in.component.html',
  styleUrls: ['./in.component.css']
})


export class InComponent implements OnInit{

    user:any;
   errorMessage:string;

  /*form = new  FormGroup({
    mail: new FormControl('',Validators.required),
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    repassword: new FormControl('',Validators.required)


  });*/
  public form: FormGroup;

  constructor(fb: FormBuilder,private authService: AuthenticationService, private router: Router,private http: HttpClient) {

    this.form = fb.group({
      password: ['', [Validators.required, Validators.minLength(12), PasswordStrengthValidator]],
      username: ['', [Validators.required]],
      mail: ['', [Validators.required]],
      repassword: ['', [Validators.required, Validators.minLength(12)]],
    });



  }


  func() {
    myfun();

  }
  ngOnInit() {
  }

  onRegister(user) {
    this.authService.register(user)
      .subscribe(data =>{
          this.user = data;
          console.log(this.user);
          this.router.navigateByUrl('/login');

        },
        err =>{
          this.errorMessage = err.error.message;
        })
  }
}
