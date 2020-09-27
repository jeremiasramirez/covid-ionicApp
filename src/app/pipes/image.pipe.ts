import { Pipe, PipeTransform } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { pluck } from 'rxjs/operators';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {
 
  getImage(img){
    return ajax.get("https://restcountries.eu/rest/v2/alpha/"+img).pipe(
      pluck("response","flag")
    )
  }
  
  transform(data) {
    return data
 
  }

}
