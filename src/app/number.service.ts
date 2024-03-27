import { Injectable } from '@angular/core';
import { places } from './place/places';
import { FavPlaces } from './myplaces';
import { Observable,of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NumberService {
  private placeurl='api/places'
  httpOptions={headers: new HttpHeaders ({'Content-type':'application-json'})}

  constructor(private messageService: MessageService , private  http:HttpClient) { }

  getPlaces(): Observable<places[]>{
    // const places2 =of(FavPlaces);
    this.messageService.add('MemberService: fetched Member details...');
    return this.http.get<places[]>(this.placeurl)
  }
    getPlacedata(SerialNo:number) :Observable<places>{
      // const myfavplace=FavPlaces.find((places)=>places.SerialNo===SerialNo)!;
      this.messageService.add(`Member displayed: fetched Member id =${SerialNo}....`);
      const url=`${this.placeurl}/${SerialNo})`;
      return this.http.get<places>(url);
    }

    // updatePlaces(places:places): Observable<any>{
    //   return this.http.put(this.placeurl,places,this.httpOptions);
    // }

    // addPlaces(places:places): Observable<places>{
    //   return this.http.post<places>(this.placeurl,places,this.httpOptions);
    // }

    // deletePlaces(SerialNo:Number): Observable<places>{
    //   const url=`${this.placeurl}/${SerialNo}`;
    //   return this.http.delete<places>(url,this.httpOptions);
    // }
  
}
