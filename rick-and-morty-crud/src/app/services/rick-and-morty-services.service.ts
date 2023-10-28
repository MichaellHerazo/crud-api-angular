import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) {}

  getRandomCharacter() {
    const randomCharacterId = Math.floor(Math.random() * 672); // Hay un total de 672 personajes
    return this.http.get(this.apiUrl + randomCharacterId);
  }
}
