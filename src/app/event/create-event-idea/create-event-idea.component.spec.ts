import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventIdeaComponent } from './create-event-idea.component';

describe('AddEventIdeaComponent', () => {
  let component: CreateEventIdeaComponent;
  let fixture: ComponentFixture<CreateEventIdeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEventIdeaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateEventIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
