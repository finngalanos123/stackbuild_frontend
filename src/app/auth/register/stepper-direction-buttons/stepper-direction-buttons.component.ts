import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stepper-direction-buttons',
  templateUrl: './stepper-direction-buttons.component.html',
  styleUrls: ['./stepper-direction-buttons.component.scss']
})
export class StepperDirectionButtonsComponent implements OnInit {

  @Input('previous') showPreviousBtn;
  @Input('next') showNextBtn;

  constructor() {
    // console.log(this.showPreviousBtn)
  }

  ngOnInit(): void {
  }


  getCompanyDetailsValue() {
    // console.log(this.registrationForm.getRawValue())
  }

}
