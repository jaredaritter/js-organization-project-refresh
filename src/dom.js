const Dom = (() => {
  const render = (...args) =>
    args.forEach((arg) => {
      document.body.appendChild(arg);
    });

  const renderLibrary = (library) => {
    library.forEach((book) => {
      console.table(book);
    });
  };

  return {
    render,
    renderLibrary,
  };
})();

export { Dom };
