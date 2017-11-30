import * as types from './types/books';
import * as ajax from './ajax/books';

/*
  Fetch books
*/

export const fetchBooksRequest = () => ({
  type: types.FETCH_BOOKS_REQUEST
});

export const fetchBooksSuccess = books => ({
  type: types.FETCH_BOOKS_SUCCESS,
  books
});

export const fetchBooksError = error => ({
  type: types.FETCH_BOOKS_ERROR,
  error
});

export const fetchBooks = () => dispatch => {
  dispatch(fetchBooksRequest());
  ajax
    .fetchBooks()
    .then(books => dispatch(fetchBooksSuccess(books)))
    .catch(error => dispatch(fetchBooksError(error)));
};

/*
  Create book
*/

export const addBookSuccess = books => ({
  type: types.ADD_BOOK_SUCCESS,
  books
});

export const addBookError = error => ({
  type: types.ADD_BOOK_ERROR,
  error
});

export const addBook = (title, author, date) => dispatch => {
  ajax
    .addBook({ title, author, date })
    .then(books => dispatch(addBookSuccess))
    .catch(error => dispatch(addBookError(error)));
};

/*
  Update book
*/

export const updateBookSuccess = books => ({
  type: types.UPDATE_BOOK_SUCCESS,
  books
});

export const updateBookError = error => ({
  type: types.UPDATE_BOOK_ERROR,
  error
});

export const updateBook = () => dispatch => {
  ajax
    .updateBook()
    .then(books => dispatch(updateBookSuccess))
    .catch(error => dispatch(updateBookError(error)));
};

/*
  Delete book
*/

export const deleteBookSuccess = books => ({
  type: types.DELETE_BOOK_SUCCESS,
  books
});

export const deleteBookError = error => ({
  type: types.DELETE_BOOK_ERROR,
  error
});

export const deleteBook = () => dispatch => {
  ajax
    .deleteBook()
    .then(books => dispatch(deleteBookSuccess))
    .catch(error => dispatch(deleteBookError(error)));
};
