import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[ngPeaqockCustomAttribute]',
})
export class CustomAttributeDirective implements OnInit {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('size') highlightTextSize = '10px';

  constructor(private _el: ElementRef) {
    _el.nativeElement.style.backgroundColor = 'blue';
  }

  ngOnInit(): void {
    this._el.nativeElement.style.color = 'whitesmoke';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightTextSize);
    this._el.nativeElement.innerText = 'Mouse Enter';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('16px');
    this._el.nativeElement.innerText = 'Mouse Leave';
  }

  private highlight(fontSize: string) {
    this._el.nativeElement.style.fontSize = fontSize;
  }
}
