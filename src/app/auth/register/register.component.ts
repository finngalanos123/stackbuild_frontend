import {Component, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {ShareholdingDialogComponent} from 'src/app/core/components/shareholding-dialog/shareholding-dialog.component';
import {ICreateOrderRequest, IPayPalConfig} from 'ngx-paypal';
import {COUNTRY_CODES, DEFAULT_COUNTRY} from '../../core/constants/country-codes';
import {SignaturePad} from 'ngx-signaturepad';
import {DataUrlToFilePipe} from '../../shared/pipes/data-url-to-file.pipe';
import {NATIONALITIES} from '../../core/constants/nationalities';
import {INDUSTRIES} from '../../core/constants/industries';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  payPalConfig ?: IPayPalConfig;
  defaultCountry = DEFAULT_COUNTRY;
  allowedCountries = COUNTRY_CODES;
  nationalities = NATIONALITIES;
  industries = INDUSTRIES;
  signaturePadOptions: Object = {
    'minWidth': 5,
    'canvasWidth': 420,
    'canvasHeight': 220,
  };

  shareholderCounts = [0];
  companyNameChoiceCounts = [1, 2];

  @ViewChild(SignaturePad) sign1: SignaturePad;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private dataURLtoFile: DataUrlToFilePipe
  ) {


  }

  ngOnInit(): void {
    this.initConfig();


    this.registrationForm = this.fb.group({
      companyInfo:
        this.fb.group({
          companyNameChoices:
          // this.fb.group({
          //   name_choice_1: this.fb.control('OK', Validators.required), name_choice_2:this.fb.control('', Validators.required)
          // })
            this.fb.array([
              this.createChoicesFormGroup(),
              this.createChoicesFormGroup()
            ])
        }),
      personalInfo:
        this.fb.group({input2: [], phone: []}),
      companyDetails:
        this.fb.group({input3: []}),
      confirmation:
        this.fb.group({input4: []}),
      payment:
        this.fb.group({input5: []}),

    })

    console.log(this.registrationForm.value)
    console.log(this.choices)
  }


  saveInfo() {
    console.log(this.registrationForm.value)
  }

  createChoicesFormGroup(): FormGroup {
    return this.fb.group({
        name_choice: ['', [Validators.required]]
      }
    );
  }

  shareholdingChange(e) {
    console.log(e.target.value);
    if (e.target.value == "< 100%") {
      this.dialog.open(ShareholdingDialogComponent, {width: '400', height: '480'})
    }

  }

  addShareholderCount() {
    const shareholderCountsLen = this.shareholderCounts.length;

    if (shareholderCountsLen < 5) {

      this.shareholderCounts.push(shareholderCountsLen)
    }


  }

  addCompanyNameChoicesCount() {
    const companyNameChoiceCountsLen = this.companyNameChoiceCounts.length;

    if (companyNameChoiceCountsLen < 5) {
      this.companyNameChoiceCounts.push(companyNameChoiceCountsLen)
      this.choices.push(this.createChoicesFormGroup())
    }

  }

  getCompanyDetailsValue() {
    // for(let c in this.registrationForm.get('companyInfo').controls.companyNameChoices.controls){
    //   console.log(c)
    //   console.log(this.registrationForm.get('companyInfo').controls)
    // }
    console.log(this.registrationForm.value)
    console.log(this.choices)

  }

  changedCountry(e) {
    console.log(e.target.value)
  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: 'EUR',
      clientId: 'AZUC1ah9XyE3zr5X7RWd-YRHSJjdeNGc6nVDAi_JkEpXfjCMHaaaH4ewIGai_X-BINpuQXDDwssEmFtY',
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

    var file = this.dataURLtoFile.transform(sign.toDataURL(), filename + '.jpg');
    console.log(sign.toDataURL())
  }

  drawStart() {
    console.log('begin drawing');
  }


  get choices() {
    const companyInfo = this.registrationForm.get('companyInfo') as FormArray;
    const companyInfoControls = companyInfo['controls'] as any;
    return companyInfoControls.companyNameChoices.controls;
  }
}
