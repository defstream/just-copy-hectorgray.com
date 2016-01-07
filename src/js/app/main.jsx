'use strict';

import DOM from './dom';
import Themes from './ui/themes';
import Polyfills from './polyfills';

import MenuBar from './ui/navigation/menu-bar';
import VideoBackground from './ui/video/background';
import GoogleAnalytics from './elements/tracking/google/page-view';

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
