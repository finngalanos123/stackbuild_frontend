import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { NewCompanyComponent } from './new-company/new-company.component';
import {SharedModule} from '../shared/shared.module';
import {NgxPayPalModule} from 'ngx-paypal';
import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';
import { SignaturePadModule } from 'ngx-signaturepad';
import { Step1Component } from './register/step1/step1.component';
import { Step2Component } from './register/step2/step2.component';
import { Step3Component } from './register/step3/step3.component';
import { Step4Component } from './register/step4/step4.component';
import { Step5Component } from './register/step5/step5.component';

@NgModule({
  declarations: [RegisterComponent, NewCompanyComponent, Step1Component, Step2Component, Step3Component, Step4Component, Step5Component],
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

