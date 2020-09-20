function convertToInteger(str) {
  let checkNum = parseInt(str); //sets checkNum (could be Not a Name already)
  return (checkNum === NaN)
  ? "Not a number"
  : checkNum //returns value if checkNum = a number
}

convertToInteger("56");
