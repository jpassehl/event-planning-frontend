import { ApplicationConfig, NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withDebugTracing } from '@angular/router';
import { EventEditComponent } from './event/event-idea-edit/event-idea-edit.component';
import { EventListComponent } from './event/event-idea-list/event-idea-list.component';


const routes: Routes = [
	{
		path: '',
		title: 'Home',	
		component: EventListComponent 
	},
	{
		path: 'edit-event-idea/:eventIdeaId', 
		title: 'Edit Event Idea',
		component: EventEditComponent ,
	},
	{
		path: 'edit-event-idea', 
		title: 'Create Event Idea',
		component: EventEditComponent ,
	},


];

@NgModule({ 
	imports: [RouterModule.forRoot(routes, {
		paramsInheritanceStrategy: 'always',
		})
	],
	exports: [RouterModule]
  
})
  
export class AppRoutingModule { }
