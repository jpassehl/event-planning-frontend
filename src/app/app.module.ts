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
import { EventCardComponent } from './event/event-idea-card/event-idea-card.component';
import { EventListComponent } from './event/event-idea-list/event-idea-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EventIdeaApiService } from './services/event-idea-api.service';
import { EventEditComponent } from './event/event-idea-edit/event-idea-edit.component';
import { eventIdeaReducer } from './state/event-ideas/event-idea.reducer';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing-module';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EventCardComponent,
    EventListComponent,
    EventEditComponent,
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
    HttpClientModule,
    AppRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
			eventIdeas: eventIdeaReducer,
    })
  ],
  providers: [
    EventIdeaApiService,
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
