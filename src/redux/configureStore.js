import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

export default configureStore({
  reducer: {
    books: bookReducer,
    categories: categoriesReducer,
  },
});
