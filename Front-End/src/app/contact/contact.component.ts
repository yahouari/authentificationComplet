import { Component, OnInit } from '@angular/core';
declare var hbspt: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  constructor() { }

  ngOnInit() {

    hbspt.forms.create({
      portalId: '7123331',
      formId: 'e5e191b3-609b-4ac0-90f8-f1cf8ea580cd',
      /*portalId: '7123331',
      formId: '543bcae2-85b4-4c11-b7e0-47f81cbe5716',*/
      target: '#hubspotForm'
    });
  }

}
/*
<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/shell.js"></script>
  <script>
  hbspt.forms.create({
    portalId: "7123331",
    formId: "543bcae2-85b4-4c11-b7e0-47f81cbe5716"
  });
</script>*/
