import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
})
export class SummaryPipe implements PipeTransform {
  transform(value: string, limit?: any, anotherParam?: any): any {
    if (!value) {
      return null;
    }
    const actualLimit = limit ? limit : 50;

    return value.substr(0, actualLimit) + '...';
  }
}
