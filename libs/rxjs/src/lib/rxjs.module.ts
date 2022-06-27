import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RxjsRoutingModule } from './rxjs-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RxjsRoutingModule
  ],
})
export class RxjsModule { }
