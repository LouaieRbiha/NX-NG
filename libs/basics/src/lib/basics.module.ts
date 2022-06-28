import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicsComponent } from './basics.component';
import { DirectiveComponent } from './directive/directive.component';
import { CustomAttributeDirective } from './directive/attribute/custom/custom-attribute.directive';
import { BasicAttributeComponent } from './directive/attribute/basic/basic-attribute.component';
import { BasicStructuralComponent } from './directive/structural/basic/basic-structural.component';
import { CustomDirective } from './directive/custom/custom.directive';
import { PipeComponent } from './pipe/pipe.component';
import { BasicPipeComponent } from './pipe/basic/basic-pipe.component';
import { ImpurePipePipe } from './pipe/custom/impure/impure-pipe.pipe';
import { PurePipePipe } from './pipe/custom/pure/pure-pipe.pipe';
import { FormComponent } from './form/form.component';
import { ReactiveComponent } from './form/reactive/reactive.component';
import { TemplateDrivenComponent } from './form/template-driven/template-driven.component';
import { BasicsRoutingModule } from './basics-routing.module';
import { HideAfterDirective } from './directive/structural/custom/hide-after.directive';
import { CustomAttributeComponent } from './directive/attribute/custom/custom-attribute.component';
import { PurePipeComponent } from './pipe/custom/pure/pure-pipe.component';
import { ImpurePipeComponent } from './pipe/custom/impure/impure-pipe.component';
import { ServiceComponent } from './service/service.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, BasicsRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [
    BasicsComponent,
    DirectiveComponent,
    CustomAttributeDirective,
    BasicAttributeComponent,
    BasicStructuralComponent,
    CustomDirective,
    PipeComponent,
    BasicPipeComponent,
    ImpurePipePipe,
    PurePipePipe,
    FormComponent,
    ReactiveComponent,
    TemplateDrivenComponent,
    HideAfterDirective,
    CustomAttributeComponent,
    PurePipeComponent,
    ImpurePipeComponent,
    ServiceComponent,
  ],
})
export class BasicsModule {}
