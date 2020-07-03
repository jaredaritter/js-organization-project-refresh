import './style.css';
import { Dom } from './dom.js';
import { home } from './home.js';
import { library } from './library.js';
import { navBar, pageTitle, contentContainer } from './pageTemplate';

const pages = ['index', 'library', 'tic-tac-toe', 'restaurant'];
const title = document.querySelector('title');

Dom.render(
  document.body,
  navBar(pages),
  pageTitle(title.textContent),
  contentContainer
);

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
