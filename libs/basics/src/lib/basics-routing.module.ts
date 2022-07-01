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
    title: 'Template Driven Form',
  },
  {
    path: 'form/reactive',
    component: ReactiveComponent,
    title: 'Reactive Form',
  },
];

const pipeRoutes: Routes = [
  {
    path: 'pipe',
    component: PipeComponent,
    title: 'Pipes',
  },
  {
    path: 'pipe/basic',
    component: BasicPipeComponent,
    title: 'Basic Pipes',
  },
  {
    path: 'pipe/custom/pure',
    component: PurePipeComponent,
    title: 'Pure Pipe',
  },
  {
    path: 'pipe/custom/impure',
    component: ImpurePipeComponent,
    title: 'Impure Pipe',
  },
];

const directiveRoutes: Routes = [
  {
    path: 'directive',
    component: DirectiveComponent,
    title: 'Directives',
  },

  {
    path: 'directive/attribute/basic',
    component: BasicAttributeComponent,
    title: 'Basic Attribute Directive',
  },
  {
    path: 'directive/attribute/custom',
    component: CustomAttributeComponent,
    title: 'Custom Attribute Directive',
  },

  {
    path: 'directive/structural/basic',
    component: BasicStructuralComponent,
    title: 'Basic Structural Directive',
  },
  {
    path: 'directive/structural/custom',
    component: HideAfterDirective,
    title: 'Custom Structural Directive',
  },
];

const serviceRoutes: Routes = [
  {
    path: 'service',
    component: ServiceComponent,
    title: 'Service',
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
