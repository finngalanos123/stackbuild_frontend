import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  getStartedForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public router: Router
  ) {
    this.getStartedForm = this.fb.group({
      email: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  sendCodeEmail() {
    this.router.navigate(['auth/confirm-code'])
  }

}
