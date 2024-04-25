import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventIdeaApiService {

  constructor(private http: HttpClient) { }

  getAllEventIdeas() {
    return this.http.get('/data/properties.json');
  }
}
