import { Component } from '@angular/core';
import { FavPlaces } from '../myplaces';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-place',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './place.component.html',
  styleUrl: './place.component.css'
})
export class PlaceComponent {
  places=FavPlaces

}
