import { EventIdea } from "./EventIdea";

export interface Task {
    id: string;
    description: string;
    done: boolean;
    eventIdea: EventIdea;
    eventIdeaId: number;
}
