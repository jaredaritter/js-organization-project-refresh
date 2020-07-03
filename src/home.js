import { Dom } from './dom.js';

const home = (() => {
  const content = [
    "Welcome to this compilation project! I figured what better way to make sure I know this stuff than to build a project that uses everything I've learned and put it all in one place. This forces me to be really sure about building modules, seperation of concerns, and making different parts of things work together in a seamless fashion.",
    "I've done something a little weird here and used independent html pages instead of keeping it all on a single page and rendering it in a content box. This decision was purely done to see if it was possible and whether there would be an 'gotchas' pulling from a single JS bundle. I've never had any lessons advocate for this sort of structure so my guess is that it is not standard practice. So yeah, just learning and trying things.",
    "I'm just warning you that this won't be the prettiest project in the world. My goal is function over form. That said I do want it to be easily understood and work correctly so I will add a way to submit issues a bit down the road.",
    'Thanks for taking a look!',
  ];

  // const parent = document.querySelector('.content-container');

  const renderIn = (parent) => Dom.renderHome(parent, content);

  return {
    renderIn,
  };
})();

export { home };
