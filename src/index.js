import './style.css';
import { Dom } from './dom.js';
import { navBar } from './nav.js';
import { pageTitle } from './pageTitle.js';
import { home } from './home.js';
import { library } from './library.js';

const pages = ['index', 'library', 'tic-tac-toe', 'restaurant'];
const title = document.querySelector('title');

Dom.render(navBar(pages));
Dom.render(pageTitle(title.textContent));

switch (title.textContent) {
  case 'Index':
    home.render();
    break;
  case 'Library':
    library.render();
    break;
  default:
    console.log('Something strange has happened');
}
