import { Component, OnInit } from '@angular/core';
import { CreateGroupService } from '../create-group.service';
import { Router } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-login-group',
  templateUrl: './login-group.component.html',
  styleUrls: ['./login-group.component.css']
})
export class LoginGroupComponent implements OnInit {

  
  navbarcomponent: NavBarComponent = new NavBarComponent();
  constructor(private createGroupService: CreateGroupService, private router: Router) { }

  loginGroup(loginGroup) {
    
    this.createGroupService.loginGroup(loginGroup).subscribe(login => {
      if(loginGroup.loginName === login[0] && loginGroup.loginPassword === login[1]){
        this.navbarcomponent.groupNameInitializer(loginGroup.loginName); 
        this.router.navigate(['/items']);
        
      }
      else {
        this.router.navigate(['']);
      }
    });
    
  }

  ngOnInit(): void {
  }

}
