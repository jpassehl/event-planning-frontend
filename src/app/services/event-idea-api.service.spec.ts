import { TestBed } from '@angular/core/testing';

import { EventIdeaApiService } from './event-idea-api.service';

describe('EventIdeaApiService', () => {
  let service: EventIdeaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventIdeaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
