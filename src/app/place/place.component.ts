import { Component } from '@angular/core';
import { FavPlaces } from '../myplaces';
import { NgFor,NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { places } from './places';
import { PlaceDetailsComponent } from '../place-details/place-details.component';
import { NumberService } from '../number.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-place',
  standalone: true,
  imports: [NgFor, FormsModule, NgIf, PlaceComponent,PlaceDetailsComponent],
  templateUrl: './place.component.html',
  styleUrl: './place.component.css'
})
export class PlaceComponent {
  places: places[] =[];
  constructor(private numberService: NumberService, private messageService:MessageService){}

  ngOnInit(): void{
    this.getPlaces();
  }

  getPlaces(): void{
    this.numberService.getPlaces().subscribe(places =>this.places=places);
  }


  selectedPlace?: places;
  onSelect(place: places): void{
  this.selectedPlace = place;
  this.messageService.add(`Message shown is........${place.Name},${place.SerialNo}`)
  
  }
}
