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

export { navBar };
