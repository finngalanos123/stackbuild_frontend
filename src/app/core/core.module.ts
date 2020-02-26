import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from './modules/material.module';
import { ShareholdingDialogComponent } from './components/shareholding-dialog/shareholding-dialog.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ShareholdingDialogComponent, NavbarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
