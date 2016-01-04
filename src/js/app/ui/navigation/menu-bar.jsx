'use strict';

import DOM from '../../dom';
import Themes from '../themes';
import Polyfills from '../../polyfills';
import MenuSection from './menu-section';

var theme = Themes.current();

/**
 * @class MenuBar
 * @description The MenuBar component delivers navigation and header functionality.
 */
class MenuBar extends React.createClass {

/**
 * creates a section of menu items.
 * @param  {Object} item The item to create a MenuItem for.
 * @param  {Object} item.header  The category of these items
 * @return {Array}  item.items   The items to include in this section.
 */
  menuSection(item) {
    return new MenuSection({
      header: item.header,
      items: item.items
    }).render();
  }
/**
 * renders the Menu Bar
 * @return {ReactNode} The menu bar
 */
  render(){
    document.title = this.props.title;

    return <div>
      <div className={theme.CSS['header-row']}>
        <button className={theme.CSS['header-row-menu']} id="main-menu">
          <i className={theme.CSS['main-menu-icon']}>sort</i>
        </button>
        <ul className={theme.CSS['menu']} htmlFor="main-menu">
          {this.props.sections.map(this.menuSection)}
        </ul>
        <span className={theme.CSS['title']}>{this.props.title}</span>
      </div>
    </div>;
  }
}

//@info Get the element from the DOM
var element = DOM.first(DOM.tag('menu'));

//@info Read the menu settings from the DOM.
var menu = DOM.navigation.menuBar(element);

//@info Render the Menu Bar
if(element) {
  ReactDOM.render(< MenuBar title={menu.title} sections={menu.sections} />, element);
}

//@export {MenuBar}
export default MenuBar;
