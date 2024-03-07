import { Injectable } from '@angular/core';
import { places } from './place/places';
import { FavPlaces } from './myplaces';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  getPlaces(): Observable<places[]>{
    return of (FavPlaces);
  }
}
