'use strict';

import DefaultTheme from './default';

//@info The theme that should be used through out the app
const CURRENT_FEED = DefaultTheme;

/**
 * Functionality for applying and retrieving themes
 */
export default  {
  /**
   * applys classNames based on the 'theme' attribute values.
   * @param  {Theme} theme The theme to apply, defaults to the CURRENT_FEED
   */
  apply: function (theme = CURRENT_FEED){
    var elements = document.querySelectorAll('*[theme]');
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var selectedTheme = element.getAttribute('theme');
      if (selectedTheme && theme.CSS[selectedTheme]) {
        element.setAttribute('class', theme.CSS[selectedTheme]);
      }
    }
  },
  /**
   * returns the current feed.
   * @return {Theme}
   */
  current: function() {
    return CURRENT_FEED;
  }
};
