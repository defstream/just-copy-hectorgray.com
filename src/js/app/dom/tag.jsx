/**
 * returns elements with the matching tag name.
 * @param  {String} name The name of the tag to return.
 * @param  {Object} the element to query, defaults to document.
 * @return {HtmlElementCollection} The elements with the specified tag name.
 */
export default function tag(name, doc = document) {
  return doc.getElementsByTagName(name);
};
