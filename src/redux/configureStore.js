import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  books: bookReducer,
  categories: categoriesReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger),
);

export default store;
