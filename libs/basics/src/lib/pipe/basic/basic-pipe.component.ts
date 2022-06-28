import { Component } from '@angular/core';

@Component({
  selector: 'ng-peaqock-basic-pipe',
  templateUrl: './basic-pipe.component.html',
  styleUrls: ['./basic-pipe.component.scss'],
})
export class BasicPipeComponent {
  dateToday = new Date();
  name = 'Peaqock';
  pi = 3.14159265359;
  currency = 1234.567;
  percent = 0.75;
}
