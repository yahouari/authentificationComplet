import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
declare var hbspt: any;
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  /*errorMessage:string;

  form = new  FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    repassword: new FormControl('',Validators.required)
    });*/




  constructor() { }

  ngOnInit() {

    hbspt.forms.create({
      portalId: '7123331',
      formId: 'e5e191b3-609b-4ac0-90f8-f1cf8ea580cd',
      target: '#hubspotForm'
    });
  }

}
