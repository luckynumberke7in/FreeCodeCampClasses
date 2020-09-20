let repeatNum = "42 42 42";
let reRegex = /^(\d+)(\s)\1\2\1$/g; // needed to add ^ and $ to start and end without repeating. /1 repeats any # of digits (\d+) and \2 takes place of (\s)
//let result = reRegex.test(repeatNum);
let result = repeatNum.match(reRegex);
let fourRepeat = "42 42 42 42";
let lResult = fourRepeat.match(reRegex);
console.log(lResult);

// /(\d+)(\s)\1\2\1\/;    does everything right except returns: "42 42 42 42"
// /(\s?)(\d+)\s(\d+)\2/

// /((\d+)(\s))\2/