import { Pipe, PipeTransform } from '@angular/core';
import { platform } from '../Interfaces/platform';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: platform[], args: string): platform[] {

    const resultList:platform[] = [];

    for (const platform of value ) {
      if( platform.name.toLocaleLowerCase().indexOf(args.toLocaleLowerCase()) > -1 ){
        resultList.push(platform);
      }      
    }
    return resultList;
  }

}
