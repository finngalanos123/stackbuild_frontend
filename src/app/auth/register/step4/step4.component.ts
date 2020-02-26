import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DataUrlToFilePipe} from '@shared/pipes/data-url-to-file.pipe';
import {SignaturePad} from 'ngx-signaturepad';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss']
})
export class Step4Component implements OnInit {

  @Input('group') confirmationFormGroup: FormGroup;
  @ViewChild(SignaturePad) sign1: SignaturePad;

  signaturePadOptions: Object = {
    'minWidth': 5,
    'canvasWidth': 420,
    'canvasHeight': 220,
  };

  constructor(
    private dataURLtoFile: DataUrlToFilePipe
  ) {
  }

  ngOnInit(): void {
  }


  drawComplete(sign, filename) {

    var file = this.dataURLtoFile.transform(sign.toDataURL(), filename + '.jpg');
    console.log(sign.toDataURL())
  }

  drawStart() {
    console.log('begin drawing');
  }

  ngAfterViewInit() {
    this.sign1.set('minWidth', 5);
    this.sign1.clear();
  }
}
