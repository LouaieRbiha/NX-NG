import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impurePipe'
})
export class ImpurePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
