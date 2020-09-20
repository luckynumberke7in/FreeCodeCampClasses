function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
for (var a = 0; a < arr.length; a ++) { // a = arr[a]
  for (var b = 0; b < arr[a].length; b ++) { // b = arr[a][b]
    product = product * arr[a][b]; // goes through each item in arr (inc. nested arrays) and multiplies each to product individually.
  }
}
  // Only change code above this line
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);
