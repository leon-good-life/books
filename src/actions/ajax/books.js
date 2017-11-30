export const fetchBooks = () =>
  fetch('/rest/book').then(response => {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response.json());
    }
    return Promise.reject(new Error(response.statusText));
  });

const headers = { 'content-type': 'application/json' };

export const addBook = book =>
  fetch('/rest/book', { method: 'PUT', headers, body: book }).then(response => {
    if (response.status === 201) {
      return Promise.resolve();
    }
    return Promise.reject(new Error(response.statusText));
  });

export const updateBook = book =>
  fetch('/rest/book', {
    method: 'POST',
    headers,
    body: JSON.stringify(book)
  }).then(response => {
    if (response.status === 204) {
      return Promise.resolve();
    }
    return Promise.reject(new Error(response.statusText));
  });

export const deleteBook = id =>
  fetch('/rest/book', {
    method: 'DELETE',
    headers,
    body: JSON.stringify({ id })
  }).then(response => {
    if (response.status === 204) {
      return Promise.resolve();
    }
    return Promise.reject(new Error(response.statusText));
  });
