import {BookReducer} from './books/bookReducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    books: BookReducer,
  });
  
export default rootReducer;