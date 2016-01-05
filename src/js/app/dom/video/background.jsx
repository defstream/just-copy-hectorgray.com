/**
 * @function all
 * @description Returns a VideoBackgroundElement from the DOM.
 * @param  {Object} element     The element to parse, defaults to document.
 * @return {VideoBackgroundElement}
 */
export default function all(element=document) {
  return {
    src: getSrc(element),
    type: getType(element),
    poster: getPoster(element)
  };
};
/**
 * @function getSrc
 * @param  {Object} element HtmlElement
 * @return {String}
 */
function getSrc(element) {
  if(!element) return;
  return element.getAttribute('src', element);
}
/**
 * @function getType
 * @param  {Object} element HtmlElement
 * @return {String}
 */
function getType(element) {
  if(!element) return;
  return element.getAttribute('type', element);
}
/**
 * @function getPoster
 * @param  {Object} element HtmlElement
 * @return {String}
 */
function getPoster(element) {
  if(!element) return;
  return element.getAttribute('poster');
}
