import { Component, OnInit } from '@angular/core';
import { EventIdea } from 'src/app/models/EventIdea';
import { EventIdeaApiService } from 'src/app/services/event-idea-api.service';

@Component({
  selector: 'event-list',
  templateUrl: './event-idea-list.component.html',
  styleUrls: ['./event-idea-list.component.scss']
})
export class EventListComponent implements OnInit {
  eventList: EventIdea[];

  constructor(private eventIdeaService: EventIdeaApiService){}

  ngOnInit(): void {
    this.eventIdeaService.getAllEventIdeas().subscribe((data : EventIdea[]) =>{
      this.eventList = data;
    });
  } 

  handleDeleteEvent(){
    console.log("delete button clicked");
  }
}
