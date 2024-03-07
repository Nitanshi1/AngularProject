import { Component, Input } from '@angular/core';
import { places } from '../place/places';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-place-details',
  standalone: true,
  imports: [NgFor, NgIf, UpperCasePipe, FormsModule],
  templateUrl: './place-details.component.html',
  styleUrl: './place-details.component.css'
})
export class PlaceDetailsComponent {
  @Input() myplace?: places;
}
