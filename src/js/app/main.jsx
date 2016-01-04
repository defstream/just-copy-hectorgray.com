'use strict';

import DOM from './dom';
import Themes from './ui/themes';
import MenuBar from './ui/navigation/menu-bar';
import Polyfills from './polyfills';

/**
 * The main application component
 */
class Main extends React.Component {
  componentDidMount() {
    //@info Apply the default theme
    Themes.apply();
  }
  render() {
    return <div></div>;
  }
}

//@info Retrieve the HTML element to bind to.
var element = DOM.first(DOM.tag('main'));

//@info Render the element.
if (element) {
  ReactDOM.render(< Main />, element);
}
