import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InscriptionComponent} from './inscription/inscription.component';
import {InComponent} from './in/in.component';
import {AcceuilComponent} from './acceuil/acceuil.component';
import {LoginComponent} from './login/login.component';
import {ContactComponent} from './contact/contact.component';
import {PaymentComponent} from './payment/payment.component';
import {Insc2Component} from './insc2/insc2.component';
import {TestComponent} from './test/test.component';

const routes: Routes = [
  {
    path: 'contact',
    component: TestComponent
  },
  {
    path: 'in',
    component: InComponent
  },
  {
    path: 'acceuil',
    component: AcceuilComponent
  },
  {
    path: 'pay',
    component: PaymentComponent
  },
  {
    path: 'inss',
    component: Insc2Component
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'in', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
