import { capitalize } from './helpers.js';

function navBar(pages) {
  const nav = document.createElement('div');
  nav.classList.add('nav');
  pages.forEach((page) => {
    const element = document.createElement('a');
    element.href = `${page}.html`;
    element.textContent = capitalize(page);
    element.classList.add('navLink');
    nav.appendChild(element);
  });
  return nav;
}

function pageTitle(title) {
  const element = document.createElement('h1');
  element.classList.add('title');
  element.textContent = title;
  return element;
}

const contentContainer = document.createElement('div');
contentContainer.classList.add('content-container');

export { pageTitle, navBar, contentContainer };
