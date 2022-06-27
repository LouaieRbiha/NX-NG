import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ngPeaqockCustomAttribute]',
})
export class CustomAttributeDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
