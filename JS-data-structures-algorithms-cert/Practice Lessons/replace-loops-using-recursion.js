function sum(arr, n) {
  // Only change code below this line
  return (n > 0) 
  ? sum(arr, n - 1) + arr[n - 1] // 'true' answer (which will recall itself.)
  : 0 // if (n <= 0) return 0
  
  // Only change code above this line
}


/* practicing if...else statements to ternary.

function multiply(arr, n) {
  return (n <= 0)
  ? 1
  : multiply(arr, n - 1) * arr[n - 1];
}

function multiply(arr, n) {
  return (n > 0)
  ? multiply(arr, n - 1) * arr[n - 1]
  : 1;
}

*/
























