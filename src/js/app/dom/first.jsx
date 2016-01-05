/**
 * @method first
 * @description returns the first element in an array if it exists.
 * @param  {Array} array   The array to return the first element from.
 * @return {?}             The first item in the array.
 */
export default function first(array) {
  if(array) {
    return array[0];
  }
};
