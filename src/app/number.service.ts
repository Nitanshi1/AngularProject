import { Injectable } from '@angular/core';
import { places } from './place/places';
import { FavPlaces } from './myplaces';
import { Observable,of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor(private messageService: MessageService) { }

  getPlaces(): Observable<places[]>{
    const places2 =of(FavPlaces);
    this.messageService.add('MemberService: fetched Member details...');
    return places2;
  }
    getPlacedata(SerialNo:number) :Observable<places>{
      const myfavplace=FavPlaces.find((places)=>places.SerialNo===SerialNo)!;
      this.messageService.add(`Member displayed: fetched Member id =${SerialNo}....`);
      return of(myfavplace);
    }
  
}
