import { Dom } from './dom.js';
import { contentContainer } from './pageTemplate.js';

const library = (() => {
  console.log('library module working');
  let myLibrary = [];

  // BOILERPLATE
  const theHobbit = new Book('The Hobbit', 'JRR Tolkein', 432, true);
  const endersGame = new Book('Enders Game', 'Orson Scott Card', 645, true);
  myLibrary.push(theHobbit);
  myLibrary.push(endersGame);

  function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  function addBookToLibrary() {
    const title = prompt('title');
    const author = prompt('author');
    const pages = prompt('pages');
    const read = prompt('read');
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    renderIn(contentContainer);
  }

  function logLibrary() {
    console.table(myLibrary);
  }

  const renderIn = (parent) => Dom.renderLibrary(parent, myLibrary);

  return {
    addBookToLibrary,
    renderIn,
  };
})();

export { library };
