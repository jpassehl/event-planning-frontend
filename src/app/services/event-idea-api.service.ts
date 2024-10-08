import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';
import { EventIdea } from '../models/EventIdea';

@Injectable({
  providedIn: 'root'
})
export class EventIdeaApiService {
  baseApiUrl: string = enviroment.baseApiUrl;

  constructor(private http: HttpClient) {}

    getAllEventIdeas(): Observable<EventIdea[]>{
      return this.http.get<EventIdea[]>(this.baseApiUrl + '/api/eventidea')
    } 
}
