import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subText',
  standalone: true,
})
export class SubTextPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    if (value.length > 200) {
      return value.slice(0, 70) + ' ...';
    }
    return value;
  }
}
