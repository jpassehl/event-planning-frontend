import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EventIdeaState } from "./event-idea.reducer";

export const selectEventIdeasState = createFeatureSelector<EventIdeaState>('eventIdeas')

export const selectEventIdeas = createSelector (
  selectEventIdeasState,
  (state: EventIdeaState) => state.eventIdeas
);
