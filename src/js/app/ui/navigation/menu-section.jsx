'use strict';

import Themes from '../themes';
import Polyfills from '../../polyfills';

var theme = Themes.current();
var concat = Function.prototype.call.bind( Array.prototype.concat );

/**
 * @class MenuSection
 * @description Provides a group of menu items with an optional header.
 */
export default class MenuSection extends React.Component {
  /**
   * @name render
   * @description renders the menu item elements
   */
  render(){
    return concat(
      this.renderHeader(),
      this.props.items.map(this.mapItem.bind(this))
    );
  }
/**
 * @name renderHeader
 * @description renders a menu item header if one exists
 */
  renderHeader() {
    if(this.props.header) {
      return [ <li className={theme.CSS['menu-item']} disabled>{this.props.header}</li> ]
    }
    return [];
  }
  /**
   * @name open
   * @description if the item has an href it is opened in a new window/tab
   */
  open() {
    if(this.href && window) {
      if(ga) {
        ga('send', 'event', {
          'eventCategory': 'MenuItem',
          'eventAction': 'Click',
          'eventLabel': this.text
        });
      }
      window.open(this.href, '_BLANK');
    }
  }
/**
 * @name mapElements
 * @description transform a MenuItem into an element
 */
  mapItem(item, idx) {
    return !idx ?
      <li onClick={this.open.bind(item)} className={theme.CSS['menu-item']} style={{borderTop: '1px solid #eee'}}><i className="material-icons">{item.icon}</i>{item.text}</li> :
      <li onClick={this.open.bind(item)} className={theme.CSS['menu-item']}><i className="material-icons">{item.icon}</i>{item.text}</li>;
  }
}
