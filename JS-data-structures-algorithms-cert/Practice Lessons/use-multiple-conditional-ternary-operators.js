function checkSign(num) {
  return (num === 0) // 1st question (as noted by ? below)
  ? "zero" // if 0
  : (num > 0) // checks if positive, only if num !== 0
  ? "positive" //if true
  : "negative" //if false
}

checkSign(10);
