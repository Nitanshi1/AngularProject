import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
   
  constructor() { }

  messages:string[]=[];
  // adding in the array
  add(message: string){
    this.messages.push(message)
  }
  //clearing the message 
  clear(){
    this.messages=[];
  }
}
