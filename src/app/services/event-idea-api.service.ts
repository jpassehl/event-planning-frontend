import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventIdeaApiService {

  constructor(private http: HttpClient) { }

  getAllEventIdeas():  Observable<Object> {
    return this.http.get('/data/properties.json');
  }
}
