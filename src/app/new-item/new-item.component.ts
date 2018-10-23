import { Component, OnInit } from '@angular/core';
import{FormGroup, FormBuilder} from "@angular/forms";
import { Item } from 'src/_model/Item';
import {MocktItemsService} from"../_services/mockt-items.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  newItemForm: FormGroup;
  
  constructor(private builder:FormBuilder, 
                private service: MocktItemsService,
                private router: Router) { 
    this.newItemForm= this.builder.group(new Item(""));
  }

  ngOnInit() {

  }

  onSubmit(){
    console.log(this.newItemForm.value);
    this.service.addItem(this.newItemForm.value).subscribe(items =>{
      this.router.navigateByUrl("/items");
    });
  }
}
