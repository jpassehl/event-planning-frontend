import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { EventCardComponent } from './event/event-card/event-card.component';
import { EventListComponent } from './event/event-list/event-list.component'; 
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EventIdeaApiService } from './services/event-idea-api.service';


@NgModule({
  declarations: [	
    AppComponent,
    EventCardComponent,
    EventListComponent,
    NavBarComponent,
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [
    EventIdeaApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
