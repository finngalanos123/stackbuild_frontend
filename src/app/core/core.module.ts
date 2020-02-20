import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from './modules/material.module';
import { ShareholdingDialogComponent } from './components/shareholding-dialog/shareholding-dialog.component';


@NgModule({
  declarations: [ShareholdingDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class CoreModule { }
