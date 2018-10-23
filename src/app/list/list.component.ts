import { Component, OnInit } from '@angular/core';
import { Item } from "../../_model/Item"; 
import { MocktItemsService } from '../_services/mockt-items.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items: Item[];

  constructor(private service:MocktItemsService) { 
    this.service.getItems().subscribe(serviceItems => {
      console.log(serviceItems);
      this.items= serviceItems;
    });

  }

  ngOnInit() {
  }
  onRemove(item: Item){
    this.service.remove(item).subscribe(serviceItems => {
      console.log(serviceItems);
      this.items= serviceItems;
    });
  }

}
