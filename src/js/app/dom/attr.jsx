/**
 * @function attr
 * @description returns the attribute of an HtmlElement
 * @param  {String}       name    The name of the attribute to return.
 * @param  {HtmlElement}  element The element to query, defaults to document.
 * @return {String}
 */
export default function attr(name, element = document) {
  if(element)
    return element.getAttribute(name);
};
