/**
 * @function all
 * @description converts an HtmlElementCollection into an Array.
 * @param  {HtmlElementCollection} collection The collection to convert.
 * @return {Array} The elements within the HtmlElementCollection.
 */
export default function all(collection) {
  if(!collection) {
    return [];
  }
  return Array.prototype.slice.call( collection, 0 );
}
