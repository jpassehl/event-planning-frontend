import { Component, Input } from "@angular/core";
import { Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";
import { EventIdea } from "src/app/models/EventIdea";

@Component({
    selector: 'event-card',
    templateUrl: './event-idea-card.component.html',
    styleUrls: ['./event-idea-card.component.scss']
})
export class EventCardComponent {
    @Input() eventIdea: EventIdea;
    @Output() deleteClicked = new EventEmitter<string>();

    onDeleteClicked(id: string){
        this.deleteClicked.emit(id);
    }

}