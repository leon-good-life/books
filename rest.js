const express = require('express');
const rest = express();
const bodyParser = require('body-parser');
rest.use(bodyParser.json());
const crypto = require('crypto');

const books = [
  {
    title: 'Zero to One',
    author: 'Peter Thiel',
    date: '2014-09-16',
    id: '001'
  },
  {
    title: 'Modern Operating Systems',
    author: 'Andrew Tanenbaum',
    date: '1991-01-01',
    id: '002'
  }
];

rest.get('/rest/book', (req, res) => {
  try {
    res.json(books);
  } catch (error) {
    res.status(500).send(error);
  }
});

rest.put('/rest/book', (req, res) => {
  if (
    !req.body ||
    typeof req.body.title !== 'string' ||
    typeof req.body.author !== 'string' ||
    typeof req.body.date !== 'string'
  ) {
    res.status(400).send(`
      Error: The server expected to recieve in http body:
      {
        "title": [string],
        "author": [string]
        "date": [string]
      }`);
    return;
  }
  try {
    const book = req.body;
    book.id = crypto.randomBytes(20).toString('hex');
    books.push(book);
    res.status(201).send(book.id);
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
    typeof req.body.date !== 'string'
  ) {
    res.status(400).send(`
      Error: The server expected to recieve in http body:
      {
        "id": [id]
        "title": [string],
        "author": [string]
        "date": [string]
      }`);
    return;
  }
  try {
    const bookId = req.body.id;
    const index = books.findIndex(book => book.id === bookId);
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
