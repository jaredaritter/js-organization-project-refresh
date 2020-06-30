// IMPORTS

const pages = ['index', 'library', 'tic-tac-toe', 'restaurant'];

function component(text) {
  const element = document.createElement('div');
  element.textContent = text;
  document.body.appendChild(element);
}

const title = document.querySelector('title');
if (title.textContent === 'Home') {
  console.log(title);
  component('Home');
} else if (title.textContent === 'Library') {
  console.log(title);
  component('Library');
}

function buildNavBar() {
  const nav = document.createElement('div');
  nav.classList.add('nav');
  pages.forEach((page) => {
    const element = document.createElement('a');
    element.href = `${page}.html`;
    element.textContent = capitalize(page);
    element.classList.add('navLink');
    nav.appendChild(element);
  });
  console.log(nav);
  return nav;
}

function capitalize(word) {
  const newWord = word.charAt(0).toUpperCase() + word.slice(1);
  return newWord;
}

const Dom = (() => {
  const render = (...args) =>
    args.forEach((arg) => {
      document.body.appendChild(arg);
    });
  return {
    render,
  };
})();

Dom.render(buildNavBar());
