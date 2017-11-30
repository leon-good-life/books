const express = require('express');
const rest = express();
const bodyParser = require('body-parser');
rest.use(bodyParser.json());

const books = [
  {
    title: 'Zero to One',
    author: 'Peter Thiel',
    date: 1410814800000,
    id: '001'
  }
];

rest.get('/rest/book', (req, res) => {
  // try {
  //   res.json(books);
  // } catch (error) {
    res.status(500).send(error);
  // }
});

rest.put('/rest/book', (req, res) => {
  if (
    !req.body ||
    typeof req.body.title !== 'string' ||
    typeof req.body.author !== 'string' ||
    typeof req.body.date !== 'number'
  ) {
    res.status(400).send(`
      Error: The server expected to recieve in http body:
      {
        "title": [string],
        "author": [string]
        "date": [number]
      }`);
    return;
  }
  try {
    books.push(req.body);
    res.status(204).send();
  } catch (error) {
    res.send(error);
  }
});

rest.post('/rest/book', (req, res) => {
  if (
    !req.body ||
    typeof req.body.id !== 'string' ||
    typeof req.body.title !== 'string' ||
    typeof req.body.author !== 'string' ||
    typeof req.body.date !== 'number'
  ) {
    res.status(400).send(`
      Error: The server expected to recieve in http body:
      {
        "id": [id]
        "title": [string],
        "author": [string]
        "date": [number]
      }`);
    return;
  }
  try {
    const bookId = req.body.id;
    const index = books.find(book => book.id === bookId);
    books[index] = req.body;
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error);
  }
});

rest.delete('/rest/book', (req, res) => {
  if (!req.body.id) {
    res.status(400).send(`
      Error: The server expected to recieve in http body:
      {
        "id": [id]
      }`);
    return;
  }
  try {
    const bookId = req.body.id;
    const index = books.find(book => book.id === bookId);
    books.splice(index, 1);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error);
  }
});

rest.listen(3001, () =>
  console.log('Books REST API server listening on port 3001!')
);
