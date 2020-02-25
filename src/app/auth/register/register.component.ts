import {Component, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {ShareholdingDialogComponent} from 'src/app/core/components/shareholding-dialog/shareholding-dialog.component';
import {ICreateOrderRequest, IPayPalConfig} from 'ngx-paypal';
import {COUNTRY_CODES, DEFAULT_COUNTRY} from '../../core/constants/country-codes';
import {SignaturePad} from 'ngx-signaturepad';
import {DataUrlToFilePipe} from '../../shared/pipes/data-url-to-file.pipe';
import {NATIONALITIES} from '../../core/constants/nationalities';
import {INDUSTRIES} from '../../core/constants/industries';
import {GetShareholdersDirsFormGroupPipe} from '../../shared/pipes/get-shareholders-dirs-form-group.pipe';
import {GetChoicesFormGroupPipe} from '../../shared/pipes/get-choices-form-group.pipe';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private createShareholdersDirsFormGroup: GetShareholdersDirsFormGroupPipe,
    private createChoicesFormGroup: GetChoicesFormGroupPipe
  ) {


  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.registrationForm = this.fb.group({
      companyInfo:
        this.fb.group({
          companyNameChoices:
            this.fb.array([
              this.createChoicesFormGroup.transform(),
              this.createChoicesFormGroup.transform()
            ]),
          approval: [false, Validators.required],
          take_over: [false, Validators.required]
        }),
      personalInfo:
        this.fb.group({
          shareHoldersDirs: this.fb.array([
            this.createShareholdersDirsFormGroup.transform()
          ]),
        }),
      companyDetails:
        this.fb.group({input3: []}),
      confirmation:
        this.fb.group({input4: []}),
      payment:
        this.fb.group({input5: []}),

    });
  }


  saveInfo() {
    console.log(this.registrationForm.getRawValue())
  }


  getCompanyDetailsValue() {
    console.log(this.registrationForm.getRawValue())
  }

  get companyInfoFormGroup() {
    return this.registrationForm.controls.companyInfo as FormGroup;
  }

  get personalInfoFormGroup() {
    return this.registrationForm.controls.personalInfo as FormGroup;
  }

  get companyDetailsFormGroup() {
    return this.registrationForm.controls.companyDetails as FormGroup;
  }

  get confirmationFormGroup() {
    return this.registrationForm.controls.confirmation as FormGroup;
  }

  get paymentFormGroup() {
    return this.registrationForm.controls.payment as FormGroup;
  }


}
