import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ShareholdingDialogComponent } from 'src/app/core/components/shareholding-dialog/shareholding-dialog.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog
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

  shareholdingChange(e) {
    console.log(e.target.value);
    if(e.target.value == "< 100%") {
      this.dialog.open(ShareholdingDialogComponent, {width: '400', height: '480'})  
    }
    
  }

}
