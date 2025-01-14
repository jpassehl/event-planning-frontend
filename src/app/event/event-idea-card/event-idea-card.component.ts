import { Component, Input } from "@angular/core";
import { Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'event-card',
    templateUrl: './event-idea-card.component.html',
    styleUrls: ['./event-idea-card.component.scss']
})
export class EventCardComponent {
	@Input() title: string;
    @Input() imageURL: string;
    @Input() description: string;

    @Output() deleteClicked = new EventEmitter<void>();

    onDeleteClicked(){
        this.deleteClicked.emit();
    }
}