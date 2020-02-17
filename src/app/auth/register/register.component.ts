import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.registrationForm = this.fb.group({
      companyInfo:
        this.fb.group({input1: []}),
      personalInfo:
        this.fb.group({input2: []}),
      companyDetails:
        this.fb.group({input3: []}),
      confirmation:
        this.fb.group({input4: []}),
      payment:
        this.fb.group({input5: []}),

    })
  }

  ngOnInit(): void {
    console.log(this.registrationForm.value)
  }

  saveInfo() {
    console.log(this.registrationForm.value)
  }

}
