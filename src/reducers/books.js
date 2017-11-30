import * as types from '../actions/types/books';
import { debug } from 'util';

const defaultState = {
  books: [],
  isProcessingRequest: false,
  error: null
};

const books = (state = defaultState, action) => {
  switch (action.type) {
    /*
      Fetch books
    */
    case types.FETCH_BOOKS_REQUEST:
      return {
        books: [],
        isProcessingRequest: true,
        error: null
      };
      break;
    case types.FETCH_BOOKS_SUCCESS:
      return {
        books: action.books,
        isProcessingRequest: false,
        error: null
      };
      break;
    case types.FETCH_BOOKS_ERROR:
      return {
        books: [],
        isProcessingRequest: false,
        error: action.error
      };
      break;
    /*
      Add book
    */
    case types.ADD_BOOK:
      return {
        books: Array.from(state.books),
        isProcessingRequest: true,
        error: null
      };
      break;
    case types.ADD_BOOK_SUCCESS:
      const clonedArr = Array.from(state.books);
      clonedArr.push(action.book);
      return {
        books: clonedArr,
        isProcessingRequest: false,
        error: null
      };
      break;
    case types.ADD_BOOK_ERROR:
      return {
        books: Array.from(state.books),
        isProcessingRequest: false,
        error: action.error
      };
      break;
    /*
      Update book
    */
    case types.UPDATE_BOOK:
      return {
        books: Array.from(state.books),
        isProcessingRequest: true,
        error: null
      };
      break;
    case types.UPDATE_BOOK_SUCCESS:
      const clonedArray = Array.from(state.books);
      const index = clonedArray.findIndex(book => book.id === action.book.id);
      clonedArray[index] = action.book;
      return {
        books: clonedArray,
        isProcessingRequest: false,
        error: null
      };
      break;
    case types.UPDATE_BOOK_ERROR:
      return {
        books: Array.from(state.books),
        isProcessingRequest: false,
        error: action.error
      };
      break;
    /*
      Delete book
    */
    case types.DELETE_BOOK:
      return {
        books: Array.from(state.books),
        isProcessingRequest: true,
        error: null
      };
      break;
    case types.DELETE_BOOK_SUCCESS:
      const clonedBooks = Array.from(state.books);
      const bookIndex = clonedBooks.findIndex(
        book => book.id === action.bookId
      );
      clonedBooks.splice(bookIndex, 1);
      return {
        books: clonedBooks,
        isProcessingRequest: false,
        error: null
      };
      break;
    case types.DELETE_BOOK_ERROR:
      return {
        books: Array.from(state.books),
        isProcessingRequest: false,
        error: action.error
      };
      break;

    default:
      return Object.assign({}, state, { books: Array.from(state.books) }); // return cloned state
      break;
  }
};

export default books;
