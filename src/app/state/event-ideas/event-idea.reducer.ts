import { createReducer, on } from '@ngrx/store';
import { EventIdea } from 'src/app/models/EventIdea';
import { addEventIdea, loadEventIdeas, loadEventIdeasFailture, loadEventIdeasSuccess, removeEventIdea } from './event-idea.action';

enum StatusTypes {
  PENDING = "pending",
  LOADING = "loading",
  ERROR = "error",
  SUCCESS = "success"
};

export interface EventIdeaState {
  eventIdeas: EventIdea[];
  error: string;
  status: StatusTypes;
};

export const initalState: EventIdeaState = {
  eventIdeas: [],
  error: null,
  status: StatusTypes.PENDING,
};

export const eventIdeaReducer = createReducer(
  //Supply inital state
  initalState,
  /*add the new eventIdea to the eventIdeas array, so we supply a new array and set it to be the old eventIdeas (state.eventIdeas)
  // with one extra eventIdea - the one that we're adding...
  */
  on(addEventIdea, (state, {eventIdea}) => ({
    ...state,
    eventIdeas: [...state.eventIdeas, eventIdea],
  })),
  //remove the eventIdea from the eventIdeas array
  /*
  // instead of adding a new eventIdea to the array, we instead filter out the one we want to delete
  */
  on(removeEventIdea, (state, {id}) => ({
    ...state,
    eventIdeas: state.eventIdeas.filter((eventIdea) => eventIdea.id !==id)
  })),
  //Trigger loading the EventIdeas
  on(loadEventIdeas, (state) => ({...state, status: StatusTypes.LOADING})),
  //Handle sucessfully loaded EventIdeas
  on(loadEventIdeasSuccess, (state, {eventIdeas}) => ({
    ...state,
    eventIdeas: eventIdeas,
    error: null,
    status: StatusTypes.SUCCESS,
  })),
  // Handle load EventIdeas failure
  on(loadEventIdeasFailture, (state, {error}) => ({
    ...state,
    error: error,
    status: StatusTypes.ERROR,
  }))
);
