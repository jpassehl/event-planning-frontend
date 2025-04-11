import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EventIdeaState } from './event-idea.state';

export const selectEventIdeasState =
  createFeatureSelector<EventIdeaState>('eventIdeas');

export const selectEventIdeas = createSelector(
  selectEventIdeasState,
  (state: EventIdeaState) => state.eventIdeas
);
