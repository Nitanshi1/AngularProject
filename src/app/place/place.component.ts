import { Component } from '@angular/core';
import { FavPlaces } from '../myplaces';
import { NgFor,NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { places } from './places';
import { PlaceDetailsComponent } from '../place-details/place-details.component';

@Component({
  selector: 'app-place',
  standalone: true,
  imports: [NgFor, FormsModule, NgIf, PlaceComponent,PlaceDetailsComponent],
  templateUrl: './place.component.html',
  styleUrl: './place.component.css'
})
export class PlaceComponent {
  places=FavPlaces

  selectedPlace?: places;
  onSelect(place: places): void{
  this.selectedPlace = place;

}
}
