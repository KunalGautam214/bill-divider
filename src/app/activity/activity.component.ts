import { Component, OnInit } from '@angular/core';
import { CreateGroupService } from '../create-group.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  groupMembers: any = [];
  groupLength: number;
  kunalSum: number;
  sameerSum: number;
  smsSum: number;
  indivisualSum = {};
  amount: any = [];
  date: any = [];
  isShow: boolean = false;
  lentName: any = [];
  lentdiff: any = [];
  diff: any = [];
  name: any = [];
  bdiff: any = [];

  constructor(private createGroupService: CreateGroupService) { }

  getAmoount() {
    this.createGroupService.getAmount().subscribe();
    
  }

  ngOnInit(): void {

    this.createGroupService.getGroupMembers().subscribe(m => {
      this.groupMembers = m;
      this.groupLength = m.length;
    });

    this.createGroupService.getAmount().subscribe(a => {
      a.forEach((item: any) => {
        this.amount.push(item.items);
        this.date.push(item.todayDate);
      });
      a.forEach((item: any) => {
        for(let i = 0; i < this.groupMembers.length; i++){
          
          if(item.items.paidBy == this.groupMembers[i]) {
            let keys = Object.keys(this.indivisualSum);
            if(keys.length != 0) {
              let wentInside = true;
              for(let x in this.indivisualSum) {
                
                if(x == item.items.paidBy) {
                  
                  let value = this.indivisualSum[x];
                  value += +item.items.itemValue;
                  this.indivisualSum[item.items.paidBy] = value;
                  wentInside = false;
                }
              }
              if(wentInside) {
                this.indivisualSum[item.items.paidBy] = +item.items.itemValue;
              }
            }
            else {
              this.indivisualSum[item.items.paidBy] = +item.items.itemValue;
            }
          }
        }
      })
    });
  }
  
  lentNameLen: number = 0;
  divideEqually() {
    this.isShow = true;
    let names = Object.keys(this.indivisualSum);
    let paid =  Object.values(this.indivisualSum);
    let len = names.length;

    let sum = 0;
    for(let i = 0; i < len; i++) {
      sum += +paid[i];
    }
    let eq = sum / len;
    let p: number;
    
    let k = 0;
    for(let i = 0; i < len; i++){
      p = +paid[i];
      if(p > eq){
        this.lentName[k] = names[i];
        this.lentdiff[k] = p - eq;
        k++;
      }
    }
    this.lentNameLen = this.lentName.length;
    let j = 0;
    for(let i = 0; i < len; i++){
      p = +paid[i];
      if(p == eq){
        continue;
      }        
      else if(p < eq){
        this.name[j] = names[i];
        this.diff[j] = eq - p;
        j++;
        
      }
        
    }
  }

  removeItem(item) {
    this.createGroupService.removeItem(item);
    
  }

  get reverseAmount() {
    
    let j = this.amount.length - 1;
    for(let i = 0; i < this.amount.length / 2; i++){
      let temp = this.amount[i];
      this.amount[i] = this.amount[j];
      this.amount[j] = temp;
      j--;
    }
    return this.amount;
  }
  
  get reverseDate() {
    let j = this.date.length - 1;
    for(let i = 0; i < this.date.length / 2; i++) {
      let temp = this.date[i];
      this.date[i] = this.date[j];
      this.date[j] = temp;
      j--;
    }
    return this.date;
  }

}
