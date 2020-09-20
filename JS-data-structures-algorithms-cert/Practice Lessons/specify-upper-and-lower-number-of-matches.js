/*
Recall that you use the plus sign + to look for one or more characters and the asterisk * to look for zero or more characters. These are convenient but sometimes you want to match a certain range of patterns.

You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets ({ and }). You put two numbers between the curly brackets - for the lower and upper number of patterns.

For example, to match only the letter a appearing between 3 and 5 times in the string "ah", your regex would be /a{3,5}h/.

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false
*/
let ohStr = "Ohhh no";
let ohRegex = /\w*[\w{3,6}]\s*\w\w/g; // took several tries...matches any alpha# character, followed by 3-6 more of any alpha#, then adds space(\s), and any 2 more alpha# chars. (could be: 'ifffff it"), change \w to specify characters.
let result = ohRegex.test(ohStr);
let ohhhh = "Ohhhhhhh no"
let result2 = ohRegex.test(ohhhh);
console.log(result2);
