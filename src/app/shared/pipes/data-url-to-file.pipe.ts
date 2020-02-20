import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataUrlToFile'
})
export class DataUrlToFilePipe implements PipeTransform {

  transform(dataurl, filename): unknown {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while(n--){
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, {type:mime});
  }

}
