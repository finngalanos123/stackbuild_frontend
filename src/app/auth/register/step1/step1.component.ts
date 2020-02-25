import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {

  companyNameChoiceCounts = [1, 2];

  constructor(private fb: FormBuilder) {
  }

  @Input('group') companyInfoFormGroup: FormGroup;

  ngOnInit(): void {
  }


  addCompanyNameChoicesCount() {
    const companyNameChoiceCountsLen = this.companyNameChoiceCounts.length;

    if (companyNameChoiceCountsLen < 5) {
      this.companyNameChoiceCounts.push(companyNameChoiceCountsLen);
      this.choices.controls.push(this.createChoicesFormGroup());

    }

  }

  createChoicesFormGroup(): FormGroup {
    return this.fb.group({
        name_choice: ['', [Validators.required]]
      }
    );
  }

  get choices() {
    const companyInfo = this.companyInfoFormGroup;
    const companyInfoControls = companyInfo['controls'] as any;
    return companyInfoControls.companyNameChoices;
  }

}
