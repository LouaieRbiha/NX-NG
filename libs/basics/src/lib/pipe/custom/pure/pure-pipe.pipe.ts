import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'purePipe'
})
export class PurePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
