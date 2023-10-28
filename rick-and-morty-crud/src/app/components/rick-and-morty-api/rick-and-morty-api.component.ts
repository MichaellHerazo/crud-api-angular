import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from 'src/app/services/rick-and-morty-services.service';

@Component({
  selector: 'app-rick-and-morty-api',
  templateUrl: './rick-and-morty-api.component.html',
  styleUrls: ['./rick-and-morty-api.component.scss']
})
export class RickAndMortyApiComponent implements OnInit{
  character: any;
  constructor(private rickAndMortyService: RickAndMortyService) {}


  ngOnInit() {
    this.rickAndMortyService.getRandomCharacter().subscribe((data: any) => {
      this.character = data;
    });
  }
}
