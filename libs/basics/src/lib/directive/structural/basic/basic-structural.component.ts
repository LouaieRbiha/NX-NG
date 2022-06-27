import { Component, OnInit } from '@angular/core';

export interface IItem {
  id: number;
  name: string;
}
@Component({
  selector: 'ng-peaqock-basic-structural',
  templateUrl: './basic-structural.component.html',
  styleUrls: ['./basic-structural.component.scss'],
})
export class BasicStructuralComponent implements OnInit {
  isSelected = true;

  switch_expression = 'expression1';

  items: IItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        id: 1,
        name: 'Item 1',
      },
      {
        id: 2,
        name: 'Item 2',
      },
      {
        id: 3,
        name: 'Item 3',
      },
    ];
  }

  trackById(index: any, item: IItem) {
    return item.id;
  }

  assignSameItems() {
    this.items = [
      {
        id: 1,
        name: 'Item 1',
      },
      {
        id: 2,
        name: 'Item 2',
      },
      {
        id: 3,
        name: 'Item 3',
      },
    ];
  }

  assignDifferentItems() {
    this.items = [
      {
        id: 1,
        name: 'Item 11',
      },
      {
        id: 2,
        name: 'Item 2',
      },
      {
        id: 3,
        name: 'Item 3',
      },
      {
        id: 4,
        name: 'Item 4',
      },
    ];
  }
}
