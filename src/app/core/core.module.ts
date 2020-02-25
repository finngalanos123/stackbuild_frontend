import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from './modules/material.module';
import { ShareholdingDialogComponent } from './components/shareholding-dialog/shareholding-dialog.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';


@NgModule({
  declarations: [ShareholdingDialogComponent, NavbarComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
