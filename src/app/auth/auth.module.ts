import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { NewCompanyComponent } from './new-company/new-company.component';
import {SharedModule} from '../shared/shared.module';
import {NgxPayPalModule} from 'ngx-paypal';
import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';
import { SignaturePadModule } from 'ngx-signaturepad';

@NgModule({
  declarations: [RegisterComponent, NewCompanyComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    NgxPayPalModule,
    InternationalPhoneNumberModule,
    SignaturePadModule
  ]
})
export class AuthModule { }

