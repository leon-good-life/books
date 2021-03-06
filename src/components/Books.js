import React from 'react';
import Book from './Book';
import { CardColumns } from 'reactstrap';

const Books = ({ books, onDelete, onEdit }) => (
  <CardColumns>
    {books.map(book => (
      <Book book={book} key={book.id} onDelete={onDelete} onEdit={onEdit} />
    ))}
  </CardColumns>
);

export default Books;
