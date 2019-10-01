import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'string'
})
export class StringPipe implements PipeTransform {

  transform(value: any, stop: any): any {
    return value.slice(0, stop) + '...';
  }

}
