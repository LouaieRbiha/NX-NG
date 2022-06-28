import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impureReverse',
  pure: false,
})
export class ImpurePipePipe implements PipeTransform {
  transform(text: string): unknown {
    console.log('impure pipe called');

    return text.split('').reverse().join('');
  }
}
