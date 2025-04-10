import { Component, OnInit } from '@angular/core';
import { EventIdea } from 'src/app/models/EventIdea';
import { EventIdeaApiService } from 'src/app/services/event-idea-api.service';
import { Store } from '@ngrx/store';
import { EventIdeaState } from 'src/app/state/event-ideas/event-idea.state';
import * as EventIdeaAction from 'src/app/state/event-ideas/event-idea.action';
import { selectEventIdeas } from 'src/app/state/event-ideas/event-idea-selector';

@Component({
  selector: 'event-list',
  templateUrl: './event-idea-list.component.html',
  styleUrls: ['./event-idea-list.component.scss'],
})
export class EventListComponent implements OnInit {
  eventList: EventIdea[];

  constructor(
    private eventIdeaService: EventIdeaApiService,
    private store: Store<EventIdeaState>
  ) {}

  ngOnInit(): void {
    this.loadEventIdeas();
  }

  handleDeleteEvent(id: string) {
    this.eventIdeaService.deleteEventIdea(id).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => this.loadEventIdeas(),
    });
  }

  loadEventIdeas() {
    //Trigger the LoadEventIdeaSucess store action upon sucessful call to API
    this.eventIdeaService.getAllEventIdeas().subscribe((data: EventIdea[]) => {
      this.store.dispatch(
        EventIdeaAction.loadEventIdeasSuccess({
          eventIdeas: [...data],
        })
      );
    });
    //update the eventList property via the store
    this.store.select(selectEventIdeas).subscribe((eventIdeas) => {
      this.eventList = eventIdeas;
    });
  }
}
