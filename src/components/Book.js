import React from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardLink
} from 'reactstrap';

const Book = ({ book, onDelete, onEdit }) => {
  const datetime = parseInt(book.date, 10);
  const date = new Date(datetime);
  return (
    <Card>
      <CardBody>
        <CardTitle>{book.title}</CardTitle>
        <CardSubtitle>{book.author}</CardSubtitle>
        <CardText>{date.toDateString()}</CardText>
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
