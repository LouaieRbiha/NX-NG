import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChildStandaloneComponent } from './child-standalone/child-standalone.component';

@Component({
  selector: 'ng-peaqock-standalone',
  standalone: true,
  imports: [CommonModule, FormsModule, ChildStandaloneComponent],
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.scss'],
})
export class StandaloneComponent {
  name = 'standalone';
  isStandalone = false;
  fontSizePx = 16;

  bindingClicked(event: MouseEvent) {
    console.log('event', event);
  }
}
