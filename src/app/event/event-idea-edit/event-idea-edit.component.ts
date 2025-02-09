import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventIdea } from 'src/app/models/EventIdea';
import { EventIdeaApiService } from 'src/app/services/event-idea-api.service';

@Component({
  selector: 'event-idea-edit',
  templateUrl: './event-idea-edit.component.html',
  styleUrl: './event-idea-edit.component.scss',
})
export class EventEditComponent {
  @Input() eventIdeaId: string;
  eventIdea: EventIdea;
  eventIdeaForm: FormGroup;
  imageCreationSrc = '../../../assets/images/event-creation.png';

  constructor(
    private eventIdeaService: EventIdeaApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params: any) => {
      this.eventIdeaId = params.eventIdeaId;
    }) 
    
    this.eventIdeaForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      imgUrl: new FormControl(''),
    });
  }

  loadEventIdea(){
    this.eventIdeaService.getEventIdea(this.eventIdeaId).subscribe((data) =>{
       //TO-DO - Handle 404 Response
    });
  }

  submitEventIdea() {
    this.eventIdea = { ...this.eventIdea, ...this.eventIdeaForm.value };
    this.eventIdeaService.createEventIdea(this.eventIdea).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
    });
  }
}
