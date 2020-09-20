function rangeOfNumbers(startNum, endNum) {
  let arr = [];
  if (startNum > endNum) {
    return arr;
  } else {
    arr = rangeOfNumbers(startNum + 1, endNum);
    arr.unshift(startNum);
    //console.log(arr); //remove first // to test arr.
    return arr;
  }

};
