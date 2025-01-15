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
    this.loadEventIdeas();
  } 

  handleDeleteEvent(id: string){
    console.log(id);
    this.eventIdeaService.deleteEventIdea(id).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => this.loadEventIdeas()
  })
  }

  loadEventIdeas(){
    this.eventIdeaService.getAllEventIdeas().subscribe((data : EventIdea[]) =>{
      this.eventList = data;
    });
  }
}
