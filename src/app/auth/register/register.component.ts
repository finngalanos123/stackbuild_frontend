import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {GetShareholdersDirsFormGroupPipe} from '@shared/pipes/get-shareholders-dirs-form-group.pipe';
import {GetChoicesFormGroupPipe} from '@shared/pipes/get-choices-form-group.pipe';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  currentStep = 1;


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

  stepChanged(e){
    this.currentStep = e.selectedIndex + 1;
  }


  saveInfo() {
    // console.log(this.registrationForm.getRawValue())
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
