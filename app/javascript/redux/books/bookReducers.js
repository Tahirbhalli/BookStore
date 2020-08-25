import {LOAD_BOOK,GET_BOOK,ERROR} from './bookActions';

const initial_state = {
  request: false,
  books: [],
  error: ''
}

export const BookReducer = (state = initial_state , action) => {
  switch (action.type) {
      case LOAD_BOOK:
       return { ...state, request: true} 
      case GET_BOOK:
        return {books: action.books,error: '' , request: false} 
      case ERROR:
          return {...state, error: action.error}
  
      default:
          return state
  }
}