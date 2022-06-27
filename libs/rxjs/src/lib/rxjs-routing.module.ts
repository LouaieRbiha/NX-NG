import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RxjsComponent } from './rxjs.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: RxjsComponent
      }
    ]),
  ],
})
export class RxjsRoutingModule { }
