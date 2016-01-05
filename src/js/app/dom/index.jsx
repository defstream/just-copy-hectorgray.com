import all from './all';
import tag from './tag';
import attr from './attr';
import first from './first';
import menuBar from './navigation/menu-bar';
import videoBackground from './video/background';
/**
 * @name DOM
 * @exports Functionality for querying the DOM.
 * @type {Object}
 */
export default {
  all: all,
  first: first,
  tag: tag,
  attr: attr,
  navigation: {
    menuBar: menuBar
  },
  video: {
    background: videoBackground
  }
};
