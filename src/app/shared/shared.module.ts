import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '@core/modules/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataUrlToFilePipe} from './pipes/data-url-to-file.pipe';
import {GetShareholdersDirsFormGroupPipe} from './pipes/get-shareholders-dirs-form-group.pipe';
import {GetChoicesFormGroupPipe} from './pipes/get-choices-form-group.pipe';


@NgModule({
  declarations: [DataUrlToFilePipe, GetShareholdersDirsFormGroupPipe, GetChoicesFormGroupPipe],
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
    DataUrlToFilePipe,
    GetShareholdersDirsFormGroupPipe,
    GetChoicesFormGroupPipe
  ]
})
export class SharedModule {
}
