import './style.css';
import { Dom } from './dom.js';
import { navBar } from './nav.js';
import { pageTitle } from './pageTitle.js';
import { library } from './library.js';

const pages = ['index', 'library', 'tic-tac-toe', 'restaurant'];
const title = document.querySelector('title');

Dom.render(navBar(pages));
Dom.render(pageTitle(title.textContent));

switch (title.textContent) {
  case 'Index':
    // SOMETHING HAPPENS
    break;
  case 'Library':
    Dom.renderLibrary(library.myLibrary);
    library.addBookToLibrary('Some New Book', 'My', 234, true);
    Dom.renderLibrary(library.myLibrary);
    break;
  default:
    console.log('Something strange has happened');
}
