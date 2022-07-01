import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng-peaqock-child-standalone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-standalone.component.html',
  styleUrls: ['./child-standalone.component.scss'],
})
export class ChildStandaloneComponent {
  @Input() size!: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  dec() {
    this.resize(-1);
  }

  inc() {
    this.resize(+1);
  }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }
}
