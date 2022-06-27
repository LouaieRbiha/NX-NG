import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsComponent } from './rxjs.component';

@NgModule({
  imports: [CommonModule, RouterModule, RxjsRoutingModule],
  declarations: [RxjsComponent],
})
export class RxjsModule { }
