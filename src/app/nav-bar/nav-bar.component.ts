import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  groupName;
  constructor(private router?: Router, private activatedRoute?: ActivatedRoute) {
    this.groupName = localStorage.getItem("groupName");
  }

  ngOnInit(): void {
    
    this.groupName = localStorage.getItem("groupName");
    
  }

  groupNameInitializer(groupName){
    this.groupName = groupName;
    let ref = window.location.href;
    if(ref.endsWith("/login")){
      window.location.href = "/items";
    }
    else if(ref.endsWith("signup")) {
      window.location.href = "/items";
    }
  }

  logout() {
    localStorage.removeItem("groupName");
    this.groupName = "";
    this.router.navigate(['']);
  }
}
