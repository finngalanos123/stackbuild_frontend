import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {INDUSTRIES} from '../../../core/constants/industries';
import {COUNTRY_CODES, DEFAULT_COUNTRY} from '../../../core/constants/country-codes';
import {NATIONALITIES} from '../../../core/constants/nationalities';
import {ShareholdingDialogComponent} from '../../../core/components/shareholding-dialog/shareholding-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {GetShareholdersDirsFormGroupPipe} from '../../../shared/pipes/get-shareholders-dirs-form-group.pipe';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {

  defaultCountry = DEFAULT_COUNTRY;
  allowedCountries = COUNTRY_CODES;
  nationalities = NATIONALITIES;

  shareholderCounts = [0];
  maxShareholderCounts = 5;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private createShareholdersDirsFormGroup: GetShareholdersDirsFormGroupPipe
  ) {
  }

  @Input('group') personalInfoFormGroup: FormGroup;

  ngOnInit(): void {
  }

  changedCountry(e) {
    console.log(e.target.value)
  }

  shareholdingChange(e) {
    console.log(e.target.value);
    if (e.target.value == "< 100%") {
      this.dialog.open(ShareholdingDialogComponent, {width: '400', height: '480'})
    }

  }

  addShareholderCount() {
    const shareholderCountsLen = this.shareholderCounts.length;

    if (shareholderCountsLen < this.maxShareholderCounts) {

      this.shareholderCounts.push(shareholderCountsLen);
      this.shareholdersDirs.controls.push(this.createShareholdersDirsFormGroup.transform());

    }
  }




  get shareholdersDirs() {
    const companyInfo = this.personalInfoFormGroup;
    const companyInfoControls = companyInfo['controls'] as any;
    return companyInfoControls.shareHoldersDirs;
  }
}
