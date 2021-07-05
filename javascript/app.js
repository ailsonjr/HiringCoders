const books = require('./database');
const readline = require('readline-sync');

const initialInput = readline.question('Do you want search a book? Y/N ');

if (initialInput.toLocaleUpperCase() === 'Y') {
  console.log('These are the available categories:');

  const bookCategories = [];
  books.forEach(book => {
    if (!bookCategories.includes(book.category)) {
      bookCategories.push(book.category);
    }
  });

  console.log(bookCategories.join(' / '));

  const categoryInput = readline.question('which category do you choose? ');

  const result = books.filter(book => categoryInput === book.category);

  console.table(result);
} else {
  console.log('These are all available books:');
  const ordenedBooks = books.sort((a, b) => a.pages - b.pages);
  console.table(books);
}
