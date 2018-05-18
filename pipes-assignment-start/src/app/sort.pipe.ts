import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], args?: any): any {
    console.log(value);
    value.sort( (a: any, b: any) => {
      return a.name < b.name ? -1 :
        (a.name > b.name ? 1 : 0);
    });
    return value;
  }

}
