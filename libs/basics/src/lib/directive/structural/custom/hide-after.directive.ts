import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

// context for using in template (as var, let var = var2(from the context), let-var in ng-template)
class NgPeaqockHideAfterContext {
  public ngPeaqockHideAfter = 5000;
  public counter = 0;
}

class NgPeaqockHideAfterPlaceholderContext {
  public placeholderCounter = 0;

  // for default values let-default(in ng-template) | let default and use like {{default}}
  public get $implicit(): number {
    return this.placeholderCounter;
  }
}

@Directive({
  selector: '[ngPeaqockHideAfter]',
})
export class HideAfterDirective implements OnInit {
  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<NgPeaqockHideAfterContext>) {}

  @Input('ngPeaqockHideAfter')
  public set delay(value: number | null) {
    this._delay = value ?? 0;
    this.context.ngPeaqockHideAfter = this.placeHolderContext.placeholderCounter = this.context.counter = this._delay / 1000;
  }

  private _delay = 0;

  // for then you need to add your keyword after the selector using camel-case
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('ngPeaqockHideAfterThen') placeHolder: TemplateRef<NgPeaqockHideAfterPlaceholderContext> | null = null;

  private context = new NgPeaqockHideAfterContext();
  private placeHolderContext = new NgPeaqockHideAfterPlaceholderContext();

  // type predicate for type checking in template if a property we're trying to access is not defined
  static ngTemplateContextGuard(dir: HideAfterDirective, ctx: unknown): ctx is NgPeaqockHideAfterContext {
    return true;
  }

  ngOnInit() {
    this.viewContainerRef.createEmbeddedView(this.templateRef, this.context);

    const counterIntervalId = setInterval(() => {
      this.context.counter--;
    }, 1000);

    setTimeout(() => {
      this.viewContainerRef.clear();

      this.placeHolder && this.viewContainerRef.createEmbeddedView(this.placeHolder, this.placeHolderContext);

      // for memory leaks
      clearInterval(counterIntervalId);
    }, this._delay);
  }
}
