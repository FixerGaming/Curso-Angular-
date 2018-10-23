import { Injectable } from '@angular/core';
import { AbstractItemsService } from './abstract-items.service';
import { Observable, observable } from 'rxjs';
import{ Item } from"../../_model/Item";

@Injectable({
  providedIn: 'root'
})
export class MocktItemsService extends AbstractItemsService{
items: Item[];
  constructor() { 
    super();
    this.items = [
      new Item("Comprar Carne"),
      new Item("Comprar Verdura"),
      new Item("Comprar Carbon")
    ];
  }
  
  getItems():Observable<Item[]>{
    return new Observable((observable)=>{
      observable.next(this.items);
      observable.complete();
    }); 
  }
  remove(item: Item):Observable<Item[]>{
    return new Observable((observable)=>{
      console.log("Borrando desde el servidor");
      this.items= this.items.filter(it=> it!== item)
      observable.next(this.items);
      observable.complete();
    });
  }

  addItem(item: Item):Observable<Item[]>{
    return new Observable((observable)=>{
      this.items.push(item);
      observable.next(this.items);
      observable.complete();
    });
  }
}
