import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveComponent } from './directive/directive.component';
import { FormComponent } from './form/form.component';
import { BasicsComponent } from './basics.component';
import { PipeComponent } from './pipe/pipe.component';
import { BasicStructuralComponent } from './directive/structural/basic/basic-structural.component';
import { HideAfterDirective } from './directive/structural/custom/hide-after.directive';
import { BasicAttributeComponent } from './directive/attribute/basic/basic-attribute.component';
import { CustomAttributeComponent } from './directive/attribute/custom/custom-attribute.component';

const formRoutes: Routes = [
  {
    path: 'form',
    component: FormComponent,
  },
];

const pipeRoutes: Routes = [
  {
    path: 'pipe',
    component: PipeComponent,
  },
];

const directiveRoutes: Routes = [
  {
    path: 'directive',
    component: DirectiveComponent,
  },

  {
    path: 'directive/attribute/basic',
    component: BasicAttributeComponent,
  },
  {
    path: 'directive/attribute/custom',
    component: CustomAttributeComponent,
  },

  {
    path: 'directive/structural/basic',
    component: BasicStructuralComponent,
  },
  {
    path: 'directive/structural/custom',
    component: HideAfterDirective,
  },
];

const routes: Routes = [
  {
    path: '',
    component: BasicsComponent,
  },
  ...directiveRoutes,
  ...formRoutes,
  ...pipeRoutes,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicsRoutingModule {}
