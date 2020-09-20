let timStr = "Timmmmber";
let timRegex = /([^m]{2})\w{4}([^m]{3})/g; // seaches 2 characters that arent m + 4 characters + 3 more characters that aren't m.
let result = timRegex.test(timStr);
let mResult = timStr.match(timRegex);

let longM = "Timmmmmmmmmmmmmmmmmmmmmmmmmmmmmmber";
let lResult = longM.match(timRegex)

console.log(result);
console.log(mResult);
console.log(lResult)