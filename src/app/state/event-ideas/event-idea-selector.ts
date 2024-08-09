import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { EventIdeaState } from "./event-idea.reducer";

export const selectEventIdeas = (state: AppState) => state.eventIdeas;
export const selectAllEventIdeas = createSelector (
  selectEventIdeas,
  (state: EventIdeaState) => state.eventIdeas
);
