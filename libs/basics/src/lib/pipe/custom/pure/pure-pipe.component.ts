import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-peaqock-pure-pipe',
  templateUrl: './pure-pipe.component.html',
  styleUrls: ['./pure-pipe.component.scss'],
})
export class PurePipeComponent implements OnInit {
  public text = 'Lorem Ipsum is simply dummy text';

  public isPure = true;

  ngOnInit(): void {
    this.isPure = false;
  }

  changeImpure() {
    this.isPure = !this.isPure;
    console.log('value changed', this.isPure);
  }

  changeText() {
    if (this.text === 'Lorem Ipsum is simply dummy text') this.text = 'Lorem Ipsum';
    else this.text = 'Lorem Ipsum is simply dummy text';

    console.log('text changed', this.text);
  }
}
