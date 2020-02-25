import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {NewCompanyComponent} from './new-company/new-company.component';
import {ConfirmCodeComponent} from './confirm-code/confirm-code.component';


const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'new-company',
    component: NewCompanyComponent
  },
  {
    path: 'confirm-code',
    component: ConfirmCodeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
