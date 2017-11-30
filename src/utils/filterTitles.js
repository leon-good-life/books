const filterTitles = books =>
  books.map(book => {
    book.title = book.title.replace(/[^a-z\s]/gi, ''); // Remove non English letters.
    book.title = book.title.toLowerCase(); // Make all letters uppercase
    book.title = book.title.charAt(0).toUpperCase() + book.title.slice(1); // Make the first letter uppercase
    book.title = book.title.replace(/\s[a-z]/g, str => str.toUpperCase()); // Make the rest of the first letter in a word uppercase
    return book;
  });

export default filterTitles;
