import {createAction, props} from '@ngrx/store';
import { EventIdea } from 'src/app/models/EventIdea';

export const addEventIdea = createAction(
  '[Nav Bar] Add EventIdea',
  props<{eventIdea: EventIdea}>()
);

export const removeEventIdea = createAction(
  '[EventIdea Card] Remove EventIdea',
  props<{id: string}>()
);

export const loadEventIdeas = createAction(`[EventIdea Listing Page] Load EventIdeas`);

export const loadEventIdeasSuccess = createAction(
  '[EventIdea API] EventIdea Load Success',
  props<{eventIdeas: EventIdea[]}>()
);

export const loadEventIdeasFailture = createAction(
  '[EventIdea API] EventIdea Load Failture',
  props<{error: string}>()
);
