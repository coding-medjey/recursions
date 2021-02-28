function reverse(array) {
  let length = array.length;
  if ((length === 0)) {
    return array ;
  }
  console.log(array[length - 1]);
  let a = array.pop();
  reverse(array);
  return array
}

console.log(reverse([1, 2, 3, 4, 5]));
