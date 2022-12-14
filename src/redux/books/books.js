const ADDBOOK = 'book-store/books/ADD BOOK';
const REMOVEBOOK = 'book-store/books/REMOVE BOOK';
const SETLOADING = 'book-store/books/SET LOADING';
const GETBOOKS = 'book-store/books/GET BOOK';

const defaultState = {
  loading: false,
  books: [],
};

export default function bookReducer(state = defaultState, action) {
  switch (action.type) {
    case ADDBOOK:
      return { ...state, books: [...state.books, action.book] };
    case REMOVEBOOK:
      return {
        ...state,
        books: state.books.filter((el) => el.item_id !== action.itemid),
      };
    case SETLOADING:
      return { ...state, loading: action.loading };
    case GETBOOKS:
      return { ...state, books: [...action.books] };
    default:
      return state;
  }
}

export function addBook(book) {
  return async (dispatch) => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(book),
      redirect: 'follow',
    };

    const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/P5wPgQdroidbzxuHZaBe/books/', requestOptions)
      .then((response) => response.text())
      .then((result) => result)
      .catch((error) => `Adding Failed. ${error}`);
    if (response === 'Created') {
      dispatch({ type: ADDBOOK, book });
    }
  };
}

export function removeBook(itemid) {
  return async (dispatch) => {
    const requestOptions = {
      method: 'DELETE',
      redirect: 'follow',
    };
    const response = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/P5wPgQdroidbzxuHZaBe/books/${itemid}`, requestOptions)
      .then((response) => response.text())
      .then((result) => result)
      .catch((error) => `Adding Failed. ${error}`);
    if (response === 'The book was deleted successfully!') {
      dispatch({ type: REMOVEBOOK, itemid });
    }
  };
}

export function setLoading(loading) {
  return { type: SETLOADING, loading };
}

export function getBooks() {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/P5wPgQdroidbzxuHZaBe/books')
      .then((response) => response.text())
      .then((result) => result)
      .catch((error) => `Loading Failed. ${error}`);
    const books = [];
    const tempArr = JSON.parse(response);
    Object.keys(tempArr).forEach((e) => {
      books.push({ ...tempArr[e][0], item_id: e });
    });
    dispatch(setLoading(false));
    dispatch({ type: GETBOOKS, books });
  };
}
