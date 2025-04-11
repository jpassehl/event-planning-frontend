import { createReducer, on } from '@ngrx/store';
import { EventIdeaState } from './event-idea.state';
import { loadEventIdeasSuccess } from './event-idea.action';

export const initalState: EventIdeaState = {
  eventIdeas: [],
};

export const eventIdeaReducer = createReducer(
  initalState,
  on(loadEventIdeasSuccess, (state, { eventIdeas }) => ({
    ...state,
    eventIdeas: eventIdeas,
  }))
);
