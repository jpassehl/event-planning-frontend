import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEventIdeaComponent } from './event/create-event-idea/create-event-idea.component';

const routes: Routes = [
	{path:'create-event-idea', component: CreateEventIdeaComponent },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			paramsInheritanceStrategy: 'always',
		})
	],
	exports: [RouterModule],
	providers: []
})

export class AppRoutingModule {}
 