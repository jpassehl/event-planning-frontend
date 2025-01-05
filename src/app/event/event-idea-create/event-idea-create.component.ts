import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Validators} from '@angular/forms'

@Component({
  selector: 'event-idea-create',
  templateUrl: './event-idea-create.component.html',
  styleUrl: './event-idea-create.component.scss'
})
export class EventIdeaCreateComponent {
   imageCreationSrc = '../../../assets/images/event-creation.png';

   eventIdeaForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('',Validators.required),
    imgUrl: new FormControl(''),
   });

   submitEventIdea() {
    console.log(this.eventIdeaForm.value);
  }
}
