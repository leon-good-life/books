import React from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardLink
} from 'reactstrap';
import formatDate from '../utils/formatDate';

const Book = ({ book, onDelete, onEdit }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle>{book.title}</CardTitle>
        <CardSubtitle>{book.author}</CardSubtitle>
        <CardText>{formatDate(book.date)}</CardText>
        <CardLink href="#" onClick={e => onEdit(book)}>
          Edit
        </CardLink>
        <CardLink
          className="text-danger"
          href="#"
          onClick={e => onDelete(book.id)}
        >
          Delete
        </CardLink>
      </CardBody>
    </Card>
  );
};

export default Book;
