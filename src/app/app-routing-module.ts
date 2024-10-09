import { ApplicationConfig, NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withDebugTracing } from '@angular/router';
import { EventIdeaCreateComponent } from './event/event-idea-create/event-idea-create.component';
import { EventListComponent } from './event/event-idea-list/event-idea-list.component';


const routes: Routes = [
	{
		path: '',
		title: 'Home',	
		component: EventListComponent 
	},
	{
		path: 'create-event-idea', 
		title: 'Create Event Idea',
		component: EventIdeaCreateComponent 
	},
];

@NgModule({ 
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
  
})
  
export class AppRoutingModule { }
