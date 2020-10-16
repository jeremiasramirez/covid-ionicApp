import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data, val)  {
  
   return data.filter((resp)=>{
      if (data) return resp.Slug.toString().toLocaleLowerCase().includes(val.toLocaleLowerCase())
      else return resp
  })
 
    
  }

}
