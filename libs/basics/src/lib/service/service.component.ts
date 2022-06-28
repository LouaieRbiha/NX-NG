import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from './rick-and-morty.service';

interface ILocation {
  name: string;
  url: string;
}

export interface ICharacter {
  id: number;
  created: string;
  gender: string;
  image: string;
  name: string;
  species: string;
  status: string;
  url: string;
  location: ILocation;
  origin: ILocation;
}

@Component({
  selector: 'ng-peaqock-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  characters: any;

  constructor(private _rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this._rickAndMortyService.getCharacters().subscribe(res => {
      this.characters = res;
      console.log('this.characters', this.characters);
    });
  }
}
