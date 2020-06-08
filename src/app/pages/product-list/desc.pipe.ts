import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'desc'
})
export class DescPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if(value.length > 50 ){
      return value.substring(0,80) +' ................... cont.'
    }
  }

}
