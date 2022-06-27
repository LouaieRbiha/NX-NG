import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveComponent } from './directive/directive.component';
import { FormComponent } from './form/form.component';
import { BasicsComponent } from './basics.component';
import { PipeComponent } from './pipe/pipe.component';

const routes: Routes = [
  {
    path: '',
    component: BasicsComponent
  },
  {
    path: 'directive',
    component: DirectiveComponent,
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'pipe',
    component: PipeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicsRoutingModule { }
