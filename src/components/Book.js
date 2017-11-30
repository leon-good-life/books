import React from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardLink
} from 'reactstrap';

const Book = ({ book }) => {
  const datetime = parseInt(book.date, 10);
  const date = new Date(datetime);
  return (
    <Card>
      <CardBody>
        <CardTitle>{book.title}</CardTitle>
        <CardSubtitle>{book.author}</CardSubtitle>
        <CardText>{date.toDateString()}</CardText>
        <CardLink href="#">Edit</CardLink>
        <CardLink className="text-danger" href="#">
          Delete
        </CardLink>
      </CardBody>
    </Card>
  );
};

export default Book;
