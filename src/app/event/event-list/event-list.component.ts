import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { EventIdea } from 'src/app/models/EventIdea';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  eventList: EventIdea[];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    const url: string = 'assets/data/properties.json'
    this.http.get(url).subscribe((data) =>{
      console.log(data);
    });
  }
  
}
