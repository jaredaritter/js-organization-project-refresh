import './style.css';
import { Dom } from './dom.js';
import { navBar } from './nav.js';
import { pageTitle } from './pageTitle.js';

const pages = ['index', 'library', 'tic-tac-toe', 'restaurant'];
const title = document.querySelector('title');

Dom.render(navBar(pages));
Dom.render(pageTitle(title.textContent));
