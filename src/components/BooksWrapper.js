import React from 'react';
import Books from './Books';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';

const BooksWrapper = ({ loading, error, books, handleDelete }) => {
  const renderBooks = () => {
    if (loading) {
      return <Loading />;
    }
    if (error) {
      return <ErrorMessage error={error} />;
    }
    return <Books books={books} onDelete={handleDelete} />;
  };
  return <div className="container mt-3">{renderBooks()}</div>;
};

export default BooksWrapper;
