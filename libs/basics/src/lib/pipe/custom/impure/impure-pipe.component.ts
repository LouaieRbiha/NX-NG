import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-peaqock-impure-pipe',
  templateUrl: './impure-pipe.component.html',
  styleUrls: ['./impure-pipe.component.scss'],
})
export class ImpurePipeComponent implements OnInit {
  public text = 'Lorem Ipsum is simply dummy text';

  public isImpure = true;

  ngOnInit(): void {
    this.isImpure = false;
  }

  changeImpure() {
    this.isImpure = !this.isImpure;
    console.log('value changed', this.isImpure);
  }

  changeText() {
    if (this.text === 'Lorem Ipsum is simply dummy text') this.text = 'Lorem Ipsum';
    else this.text = 'Lorem Ipsum is simply dummy text';

    console.log('text changed', this.text);
  }
}
