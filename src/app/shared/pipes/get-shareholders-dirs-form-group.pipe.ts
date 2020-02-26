import {Pipe, PipeTransform} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Pipe({
  name: 'getShareholdersDirsFormGroup'
})
export class GetShareholdersDirsFormGroupPipe implements PipeTransform {

  constructor(private fb: FormBuilder) {

  }

  transform(): FormGroup {
    return this.fb.group({
        full_name: ['', Validators.required],
        passport_number: ['', Validators.required],
        passport_expiry_date: ['', Validators.required],
        nationality: ['', Validators.required],
        birthday: ['', Validators.required],
        phone_number: ['', Validators.required],
        password: ['', Validators.required],
        address_1: ['', Validators.required],
        address_2: ['', Validators.required],
        postcode: ['', Validators.required],
        both_director: ['', Validators.required],
        shareholding_percentage: ['', Validators.required]
      }
    );
  }

}
