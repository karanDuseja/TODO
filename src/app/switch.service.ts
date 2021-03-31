import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {

  constructor() { }
   

  getSwitch(){
    return [
      {
        id: 1,
        name: 'karan',
        score: 23
      },
      {
        id: 2,
        name: 'karasdfsd',
        score: 283
      },
      {
        id: 3,
        name: 'karasdfsdfn',
        score: 233
      },
      {
        id: 4,
        name: 'karsdfan',
        score: 223
      },
    ];
  }

   private items: any = [];
 
    addItem(item: any) {
        this.items.push(item);
    }
 
    getItems(){
        return this.items;
    }
}

