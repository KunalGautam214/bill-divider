import { NavBarComponent } from './../nav-bar/nav-bar.component';
import { CreateGroupService } from './../create-group.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {

  groupMemberNames: any = [];
  navbarcomponent: NavBarComponent = new NavBarComponent();;

  constructor(private createGroupService: CreateGroupService, private router: Router) { }

  createGroup(createGroup) {
    this.createGroupService.createGroup(createGroup, this.groupMemberNames);
    this.router.navigate(['/items']);
    this.navbarcomponent.groupNameInitializer(localStorage.getItem("groupName"));

  }

  memberNames(memberNames) {
    this.groupMemberNames.push(memberNames.value);
    memberNames.value = '';
  }

  removeMembers(memberName) {
    let index = this.groupMemberNames.indexOf(memberName);
    this.groupMemberNames.splice(index, 1);
  }

  ngOnInit(): void {
  }

}
