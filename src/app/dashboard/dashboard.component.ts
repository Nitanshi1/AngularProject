import { Component } from '@angular/core';
import { places } from '../place/places';
import { NgFor } from '@angular/common';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  places2:places[]=[];
  constructor(private placeService: NumberService){}

  ngOnInit(){
    this.getPlaces();
  }
   getPlaces(){
    this.placeService.getPlaces().subscribe(places=>this.places2=places);
   }

}
