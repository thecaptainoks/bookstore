import { Action } from '@ngrx/store';
import { Book } from '../../models';

export const SELECT = '[Books] Select';
export const ADD_ONE = '[Books] Add One';

export class Select implements Action {
    readonly type = SELECT;

    constructor(public payload: number) { }
}

export class AddOne implements Action {
    readonly type = ADD_ONE;

    constructor(public payload: Book) { }
}

export type Action = AddOne | Select;

