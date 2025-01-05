import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventIdea } from 'src/app/models/EventIdea';
import { EventIdeaApiService } from 'src/app/services/event-idea-api.service';

@Component({
  selector: 'event-idea-create',
  templateUrl: './event-idea-create.component.html',
  styleUrl: './event-idea-create.component.scss',
})
export class EventIdeaCreateComponent {
  eventIdea: EventIdea;
  eventIdeaForm: FormGroup;
  imageCreationSrc = '../../../assets/images/event-creation.png';

  constructor(
    private eventIdeaService: EventIdeaApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.eventIdeaForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      imgUrl: new FormControl(''),
    });
  }

  submitEventIdea() {
    this.eventIdea = { ...this.eventIdea, ...this.eventIdeaForm.value };
    this.eventIdeaService.createEventIdea(this.eventIdea).subscribe({
      next: (eventIdea) => {
        this.router.navigate(['/']);
      },
    });
  }
}
