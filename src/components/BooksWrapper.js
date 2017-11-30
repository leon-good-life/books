import React from 'react';
import Books from './Books';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';
import filterTitles from '../utils/filterTitles';

const BooksWrapper = ({ loading, error, books, handleDelete, handleEdit }) => {
  const renderBooks = () => {
    if (loading) {
      return <Loading />;
    }
    if (error) {
      return <ErrorMessage error={error} />;
    }
    return (
      <Books
        books={filterTitles(books)}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    );
  };
  return <div className="container mt-3">{renderBooks()}</div>;
};

export default BooksWrapper;
