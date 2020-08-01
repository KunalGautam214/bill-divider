import { CreateGroupService } from './../create-group.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-bill-home',
  templateUrl: './bill-home.component.html',
  styleUrls: ['./bill-home.component.css']
})
export class BillHomeComponent implements OnInit {

  groupMembers: any = [];
  groupLength: number;
  itemName = [];
  

  constructor(private createGroupService: CreateGroupService) { }

  save(item) {
    this.createGroupService.saveItems(item);
    this.itemName[0] = item.itemName;
    this.itemName[1] = item.itemValue;
    
  }
  
  ngOnInit(): void {
    this.createGroupService.getGroupMembers().subscribe(m => {
      this.groupMembers = m;
      this.groupLength = m.length;
      
    }); 
  }
}
