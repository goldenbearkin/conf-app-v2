import { Record } from 'immutable';

interface T {
    id: number;
    title: string;
    speaker: string;
    avgRating: number;
    watched: boolean;
    rated: boolean;
}

const R: {new(p:T): T} = <any>Record({
    id: null,
    title: null,
    speaker: null,
    avgRating: null,
    watched: null,
    rated: null
});

export class Talk extends R {}
