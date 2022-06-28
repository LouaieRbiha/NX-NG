import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ICharacter } from './service.component';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  constructor(private http: HttpClient) {}

  getCharacters(): Observable<ICharacter[]> {
    return this.http.get<ICharacter>('https://rickandmortyapi.com/api/character/').pipe(
      map((data: any) => {
        return data.results;
      }),
    );
  }
}
