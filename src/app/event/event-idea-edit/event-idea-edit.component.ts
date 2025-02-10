import { Component, Input } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventIdea } from 'src/app/models/EventIdea';
import { EventIdeaApiService } from 'src/app/services/event-idea-api.service';
import { __values } from 'tslib';

@Component({
  selector: 'event-idea-edit',
  templateUrl: './event-idea-edit.component.html',
  styleUrl: './event-idea-edit.component.scss',
})
export class EventEditComponent {
  @Input() eventIdeaId: string;
  eventIdea: EventIdea;
  eventIdeaConfig;
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
    });

    this.eventIdeaForm = new FormGroup({
      name: new FormControl('',Validators.required),
      description: new FormControl('', Validators.required),
      imgUrl: new FormControl('')
    });

    if (this.eventIdeaId) {
      this.loadEventIdea();
    }
  }

  loadEventIdea() {
    this.eventIdeaService.getEventIdea(this.eventIdeaId).subscribe({
      next: (res: EventIdea) => {
        this.eventIdeaConfig = { ...this.eventIdeaConfig, ...res };
        //Set form values
        Object.keys(this.eventIdeaConfig).forEach(key => {
          this.eventIdeaForm.get(key)?.setValue(this.eventIdeaConfig[key])
        })
    },
      error: (err) => {
        console.log(err);
      },
    });
  }

  submitEventIdea() {
    this.eventIdea = { ...this.eventIdea, ...this.eventIdeaForm.value };
    //We're creating a new event idea
    if (!this.eventIdeaConfig) {
      this.eventIdeaService.createEventIdea(this.eventIdea).subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
      });
    }
    //We're updating an existing event idea
    else if(this.eventIdeaConfig){
       this.eventIdeaService.updateEventIdea(this.eventIdeaId,this.eventIdea).subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
      }); 
    }
  }
}
