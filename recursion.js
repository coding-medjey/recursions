function reverse(array) {
  if (!array.length) {
    return array;
  }
  let a = array.pop();
  reverse(array);
  array.unshift(a);
  return array;
}

console.log(reverse([1, 2, 3, 4, 5]));
