import {Action} from '@ngrx/store';
import * as bookAction from '../actions/books';

import {Book} from '../../models';


export interface State {
  ids: number[];
  books: { [id: number]: Book };
  selected: number;
}

export const initialState: State = {
  ids: [],
  books: {},
  selected: null,
};

export function reducer(state = initialState, action: bookAction.Action) {
  switch (action.type) {

    case bookAction.SET_ALL: {
      const ids_list = [];
      const books_object = {};
      // @ts-ignore
      // tslint:disable-next-line:forin
      for ( const i in Object.values(action.payload)) {
        const book = Object.values(action.payload)[i];
        ids_list.push(book['id']);
        books_object[book['id']] = book;
      }
      return {
        ...state,
        ids: ids_list,
        books: books_object
      };
    }


    case bookAction.ADD_ONE: {
      const newBook: Book = action.payload;
      state.books[newBook.id] = newBook;
      return {
        ...state,
        ids: [...state.ids, newBook.id],
        books: state.books
      };
    }


    case bookAction.SELECT: {
      const id = action.payload;
      return {
        ...state,
        selected: id
      };
    }

    default:
      return state;
  }
}

export const getIds = (state: State) => state.ids;
export const getBooks = (state: State) => state.books;
export const getSelected = (state: State) => state.selected;

