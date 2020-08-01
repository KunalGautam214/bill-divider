import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CreateGroupService {

  constructor(private db: AngularFireDatabase) { }

  createGroup(groupCredentials, groupMember) {
    let groupName = groupCredentials.groupName;
    localStorage.setItem("groupName", groupName);
    return this.db.object('/'+ groupName +'/').update({groupCredentials: groupCredentials, groupMember: groupMember});
  }

  loginGroup(loginGroup) {
    let loginName = loginGroup.loginName;
    localStorage.setItem("groupName", loginName);
    return this.db.list('/'+ loginName +'/groupCredentials/').valueChanges();
   
  }

  saveItems(items) {
    let groupName = localStorage.getItem("groupName");
    let todayDate = Date.now();
    if(!groupName) return;

    return this.db.list('/'+ groupName +'/' + groupName).push({items, todayDate});
  }

  getAmount() {
    let groupName = localStorage.getItem("groupName");
    return this.db.list('/'+ groupName +'/'+ groupName).valueChanges();
  }

  getGroupMembers() {
    let groupName = localStorage.getItem("groupName");
    return this.db.list('/'+ groupName +'/groupMember').valueChanges();
  }

  removeItem(item) {
    let groupName = localStorage.getItem("groupName");
    return this.db.object('/'+ groupName +'/' + item).remove();
  }
}