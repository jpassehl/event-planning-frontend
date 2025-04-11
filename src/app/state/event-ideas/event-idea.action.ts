import { createAction, props } from '@ngrx/store';
import { EventIdea } from 'src/app/models/EventIdea';

export const loadEventIdeasSuccess = createAction(
  '[EventIdea API] EventIdea Load Success',
  props<{ eventIdeas: EventIdea[] }>()
);

export const loadEventIdeasFailture = createAction(
  '[EventIdea API] EventIdea Load Failure',
  props<{ error: string }>()
);
