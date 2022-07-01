import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ng-peaqock-scam',
  template: ` <p>scam works!</p> `,
  styles: [],
})
export class ScamComponent {}

@NgModule({
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: ScamComponent }])],
  declarations: [ScamComponent],
  exports: [ScamComponent],
})
export class ScamComponentModule {}
