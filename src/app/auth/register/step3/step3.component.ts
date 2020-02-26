import {Component, Input, OnInit} from '@angular/core';
import {INDUSTRIES} from '@core/constants/industries';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component implements OnInit {
  industries = INDUSTRIES;
  @Input('group') companyDetailsFormGroup: FormGroup;
  constructor() {
  }

  ngOnInit(): void {
  }

}
