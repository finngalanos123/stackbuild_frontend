import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../core/modules/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DataUrlToFilePipe } from './pipes/data-url-to-file.pipe';



@NgModule({
  declarations: [DataUrlToFilePipe],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DataUrlToFilePipe
  ]
})
export class SharedModule { }
