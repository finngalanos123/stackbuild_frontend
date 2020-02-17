import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { NewCompanyComponent } from './new-company/new-company.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [RegisterComponent, NewCompanyComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
