import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dutch'
})
export class DutchPipe implements PipeTransform {

  transform(value: number, args?: any, arg2?:any): string 
  {
    return (arg2 + value).replace(/[,]/gi, '').replace(/[.]/gi, args);
  }

}
