import { Dom } from './dom.js';

const home = (() => {
  const content = [
    "Welcome to this compilation project! I figured what better way to make sure I know this stuff than to build a project that uses everything I've learned and put it all in one place. This forces me to be really sure about building modules, seperation of concerns, and making different parts of things work together in a seamless fashion.",
    "I'm just warning you that this won't be the prettiest project in the world. My goal is function over form. That said I do want it to be easily understood and work correctly so I will add a way to submit issues a bit down the road.",
    'Thanks for taking a look!',
  ];

  const render = () => Dom.renderHome(content);

  return {
    render,
  };
})();

export { home };
