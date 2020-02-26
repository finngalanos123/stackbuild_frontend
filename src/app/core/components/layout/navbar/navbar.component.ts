import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '@core/services/auth.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  getStartedForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public router: Router,
    public auth: AuthService,
    private toastr: ToastrService
  ) {
    this.getStartedForm = this.fb.group({
      email: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  sendCodeEmail() {
    this.auth.sendConfirmationCode(this.getStartedForm.value).subscribe(async () => {
      await this.router.navigate(['auth/confirm-code']);
      this.toastr.success('Code has been sent successfully');
    });
  }

}
