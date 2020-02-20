import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {ShareholdingDialogComponent} from 'src/app/core/components/shareholding-dialog/shareholding-dialog.component';
import {ICreateOrderRequest, IPayPalConfig} from 'ngx-paypal';
import {COUNTRY_CODES} from '../../core/constants/country-codes';
import {SignaturePad} from 'ngx-signaturepad';
import {DataUrlToFilePipe} from '../../shared/pipes/data-url-to-file.pipe';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  payPalConfig ?: IPayPalConfig;
  defaultCountry = 'sg';
  allowedCountries = COUNTRY_CODES;
  signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 5,
    'canvasWidth': 200,
    'canvasHeight': 100,
  };

  @ViewChild(SignaturePad) sign1: SignaturePad;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private dataURLtoFile: DataUrlToFilePipe
  ) {
    this.registrationForm = this.fb.group({
      companyInfo:
        this.fb.group({input1: []}),
      personalInfo:
        this.fb.group({input2: [], phone: []}),
      companyDetails:
        this.fb.group({input3: []}),
      confirmation:
        this.fb.group({input4: []}),
      payment:
        this.fb.group({input5: []}),

    })
  }

  ngOnInit(): void {
    this.initConfig();
    console.log(this.registrationForm.value)
  }

  saveInfo() {
    console.log(this.registrationForm.value)
  }

  shareholdingChange(e) {
    console.log(e.target.value);
    if (e.target.value == "< 100%") {
      this.dialog.open(ShareholdingDialogComponent, {width: '400', height: '480'})
    }

  }

  changedCountry(e) {
    console.log(e.target.value)
  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: 'EUR',
      clientId: 'AawIoSwkiiAbu1b3D59rIjfvqNQNHXedQvApJHwOavY1XBXUF-6ofrXXImB9TShdCYW7kGlbqbfBqP3R',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'EUR',
              value: '9.99',
              breakdown: {
                item_total: {
                  currency_code: 'EUR',
                  value: '9.99'
                }
              }
            },
            items: [
              {
                name: 'Enterprise Subscription',
                quantity: '1',
                category: 'DIGITAL_GOODS',
                unit_amount: {
                  currency_code: 'EUR',
                  value: '9.99',
                },
              }
            ]
          }
        ]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then(details => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });
      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        // this.showSuccess = true;
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };


  }

  ngAfterViewInit() {
    this.sign1.set('minWidth', 5);
    this.sign1.clear();
  }

  drawComplete(sign, filename) {

    var file = this.dataURLtoFile.transform(sign.toDataURL(),filename +'.jpg');
    console.log(sign.toDataURL())
  }

  drawStart() {
    console.log('begin drawing');
  }

}
