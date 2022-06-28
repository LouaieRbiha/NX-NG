import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveComponent } from './directive/directive.component';
import { BasicsComponent } from './basics.component';
import { PipeComponent } from './pipe/pipe.component';
import { BasicStructuralComponent } from './directive/structural/basic/basic-structural.component';
import { HideAfterDirective } from './directive/structural/custom/hide-after.directive';
import { BasicAttributeComponent } from './directive/attribute/basic/basic-attribute.component';
import { CustomAttributeComponent } from './directive/attribute/custom/custom-attribute.component';
import { BasicPipeComponent } from './pipe/basic/basic-pipe.component';
import { PurePipeComponent } from './pipe/custom/pure/pure-pipe.component';
import { ImpurePipeComponent } from './pipe/custom/impure/impure-pipe.component';
import { ServiceComponent } from './service/service.component';
import { TemplateDrivenComponent } from './form/template-driven/template-driven.component';
import { ReactiveComponent } from './form/reactive/reactive.component';

const formRoutes: Routes = [
  {
    path: 'form/template-driven',
    component: TemplateDrivenComponent,
  },
  {
    path: 'form/reactive',
    component: ReactiveComponent,
  },
];

const pipeRoutes: Routes = [
  {
    path: 'pipe',
    component: PipeComponent,
  },
  {
    path: 'pipe/basic',
    component: BasicPipeComponent,
  },
  {
    path: 'pipe/custom/pure',
    component: PurePipeComponent,
  },
  {
    path: 'pipe/custom/impure',
    component: ImpurePipeComponent,
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

const serviceRoutes: Routes = [
  {
    path: 'service',
    component: ServiceComponent,
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
  ...serviceRoutes,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicsRoutingModule {}
