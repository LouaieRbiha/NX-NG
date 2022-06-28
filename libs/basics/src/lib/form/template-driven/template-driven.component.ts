import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ng-peaqock-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss'],
})
export class TemplateDrivenComponent {
  onSubmit(form: NgForm) {
    console.log('form', form);
  }
}
