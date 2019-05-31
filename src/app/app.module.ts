import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ViewFirstComponent } from './Components/Generals/view-first/view-first.component';
import { ViewSecondComponent } from './Components/Generals/view-second/view-second.component';
import { NavbarComponent } from './Components/Generals/navbar/navbar.component';
import { FormsModule  } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GetjsonService } from './Components/services/getjson.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewSecondComponent,
    NavbarComponent,
    ViewSecondComponent,
    ViewFirstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
    
  ],
  providers: [
    GetjsonService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }