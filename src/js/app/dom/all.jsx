export default function all(collection) {
  if(!collection) {
    return [];
  }
  return Array.prototype.slice.call( collection, 0 );
}
