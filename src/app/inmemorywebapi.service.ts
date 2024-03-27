import { Injectable } from '@angular/core';
import { places } from './place/places';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InmemorywebapiService implements InMemoryDbService{
  createDb(){
    const meplaces=[
    {Name:'Manali', SerialNo: 1 },
    {Name:'Rishikesh', SerialNo: 2 },
    {Name:'Kerala', SerialNo: 3 },
    {Name:'Kasol', SerialNo: 4 }
    ];
  return {meplaces};

  };
  genId(placesabc: places[]): number{
    return placesabc.length > 0 ? Math.max(...placesabc.map(places =>places.SerialNo))+1:1;
}

  }
