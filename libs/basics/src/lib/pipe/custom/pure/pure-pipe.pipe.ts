import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pureReverse',
})
export class PurePipePipe implements PipeTransform {
  transform(text: string): unknown {
    console.log('pure pipe called');

    return text.split('').reverse().join('');
  }
}
