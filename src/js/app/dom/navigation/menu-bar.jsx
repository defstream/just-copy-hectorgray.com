import all from '../all';
import first from '../first';

/**
 * menuBar - Parses the menu bar from the dom element.
 * @param  {HtmlElement} element The dom element to parse.
 * @return {MenuBarElement}  { title: String, header: String, sections: MenuSection[] }
 */
export default function menuBar(element) {
  return {
    title: getTitle(element),
    header: getHeader(element),
    sections: getMenuSections(element)
  };
}
/**
 * parses a 'menu-item' from the DOM.
 * @param  {Object} element The 'menu-item' DOM element.
 * @return {MenuItemElement} { icon: String, href: String, text: String }
 */
function getMenuItem(element) {
  if(!element) return;
  return {
    icon: element.getAttribute('icon'),
    href: element.getAttribute('href'),
    text: element.textContent
  };
}
/**
 * parses a 'menu-section' from the DOM.
 * @param  {Object} element The 'menu-item' DOM element.
 * @return {MenuSectionElement} { header: String, items: MenuItemElement[] }
 */
function getMenuSection(element)  {
  if(!element) return;
  return {
    header: element.getAttribute('header'),
    items: all( element.getElementsByTagName('menu-item') ).map( getMenuItem )
  };
}
/**
 * parses the 'menu-section's from the DOM.
 * @param  {Object} element The 'menu-section' DOM element.
 * @return {MenuSectionElement[]}
 */
function getMenuSections(element) {
  if(!element) return [];
  var menuSections = all( element.getElementsByTagName('menu-section'), 0 );
  return menuSections.map(getMenuSection);
}
/**
 * parses the 'title' attribute from the DOM.
 * @param  {Object} element The DOM element to parse.
 * @return {String}
 */
function getTitle(element) {
  if(!element) return;
  return element.getAttribute('title');
}
/**
 * parses the 'text' attribute from the DOM.
 * @param  {Object} element The DOM element to parse.
 * @return {String}
 */
function getText(element) {
  if(!element) return;
  return element.getAttribute('text');
}
/**
 * parses the 'header' element from the DOM.
 * @param  {Object} element The 'header' DOM element to parse.
 * @return {MenuHeaderElement} { text: String }
 */
function getHeader(element) {
  if(!element) return;
  var header = first(element.getElementsByTagName('header'));
  return {
    text: getText(header)
  };
}
