import { capitalize } from './helpers.js';

function pageTitle(title) {
  const element = document.createElement('h1');
  element.classList.add('title');
  element.textContent = title;
  return element;
}

export { pageTitle };
