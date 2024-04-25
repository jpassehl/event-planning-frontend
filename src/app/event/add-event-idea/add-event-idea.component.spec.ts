import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventIdeaComponent } from './add-event-idea.component';

describe('AddEventIdeaComponent', () => {
  let component: AddEventIdeaComponent;
  let fixture: ComponentFixture<AddEventIdeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEventIdeaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEventIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
