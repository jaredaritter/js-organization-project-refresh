const Dom = (() => {
  const render = (...args) =>
    args.forEach((arg) => {
      document.body.appendChild(arg);
    });

  const renderHome = (content) => {
    content.forEach((para) => {
      const p = document.createElement('p');
      p.textContent = para;
      p.classList.add('para');
      document.body.appendChild(p);
    });
  };

  const renderLibrary = (library) => {
    library.forEach((book) => {
      console.table(book);
    });

    // TABLE AND THEAD VARS
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    const author = document.createElement('th');
    const title = document.createElement('th');
    const pages = document.createElement('th');
    const read = document.createElement('th');

    // BUILD ATTACH THEAD TO TABLE
    author.textContent = 'Author';
    title.textContent = 'Title';
    pages.textContent = 'Pages';
    read.textContent = 'Read';
    tr.appendChild(author);
    tr.appendChild(title);
    tr.appendChild(pages);
    tr.appendChild(read);
    thead.appendChild(tr);
    table.appendChild(thead);

    // CLASS ASSIGNMENT
    table.classList.add('table');

    // BUILD AND ATTACH TBODY TO TABLE
    const tbody = document.createElement('tbody');
    library.forEach((book) => {
      const tr = document.createElement('tr');
      for (const item in book) {
        const td = document.createElement('td');
        td.textContent = book[item];
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    // ATTACH TABLE TO BODY
    document.body.appendChild(table);
  };

  return {
    render,
    renderHome,
    renderLibrary,
  };
})();

export { Dom };
