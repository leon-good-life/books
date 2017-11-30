import React from 'react';
import Book from './Book';
import { CardColumns } from 'reactstrap';

const Books = ({books}) => (
  <CardColumns>
    {books.map(book => <Book book={book} key={book.id} />)}
  </CardColumns>
);

export default Books