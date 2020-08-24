/* eslint-disable max-len */
import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return [...state.slice(0, action.index), ...state.slice(action.index + 1, state.length)];
    default:
      return state;
  }
};

export default booksReducer;
