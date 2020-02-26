import {Pipe, PipeTransform} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Pipe({
  name: 'getChoicesFormGroup'
})
export class GetChoicesFormGroupPipe implements PipeTransform {

  constructor(private fb: FormBuilder) {
  }

  transform(): FormGroup {
    return this.fb.group({
        name_choice: ['', [Validators.required]]
      }
    );
  }

}
