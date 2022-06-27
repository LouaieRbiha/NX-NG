import { Component } from '@angular/core';

@Component({
  selector: 'ng-peaqock-basic-attribute',
  templateUrl: './basic-attribute.component.html',
  styleUrls: ['./basic-attribute.component.scss'],
})
export class BasicAttributeComponent {
  currentStyles = {
    'font-style': 'italic',
    'font-weight': 'bold',
    'font-size': '24px',
  };

  isRed = true;
}
