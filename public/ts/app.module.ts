import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing }              from './app.routing';

import { AppComponent }   from './app.component';
import { HomeComponent }   from './home.component';
import {NavigationComponent} from './navigation.component'
import {CarouselComponent} from './carousel.component';
@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    CarouselComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }