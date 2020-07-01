import { Dom } from './dom.js';

const library = (() => {
  console.log('library module working');
  let myLibrary = [];

  addBookToLibrary('The Hobbit', 'JRR Tolkein', 432, true);
  addBookToLibrary('Enders Game', 'Orson Scott Card', 645, true);

  function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
  }

  function logLibrary() {
    console.table(myLibrary);
  }

  const render = () => Dom.renderLibrary(myLibrary);

  return {
    render,
  };
})();

export { library };
