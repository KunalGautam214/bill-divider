import { RouterModule } from '@angular/router';
import { CreateGroupService } from './create-group.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { CreateGroupComponent } from './create-group/create-group.component';
import { FormsModule } from '@angular/forms';
import { BillHomeComponent } from './bill-home/bill-home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginGroupComponent } from './login-group/login-group.component';
import { ActivityComponent } from './activity/activity.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateGroupComponent,
    BillHomeComponent,
    NavBarComponent,
    LoginGroupComponent,
    ActivityComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'login', component: LoginGroupComponent},
      {path: 'signup', component: CreateGroupComponent},
      {path: 'navbar', component: NavBarComponent},      
      {path: 'items', component: BillHomeComponent},
      {path: 'activities', component: ActivityComponent},
      {path: 'about', component: AboutComponent},
      {path: '**', component: AboutComponent},
    ]),
  ],
  providers: [
    CreateGroupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
