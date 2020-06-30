const Dom = (() => {
  const render = (...args) =>
    args.forEach((arg) => {
      document.body.appendChild(arg);
    });
  return {
    render,
  };
})();

export { Dom };
