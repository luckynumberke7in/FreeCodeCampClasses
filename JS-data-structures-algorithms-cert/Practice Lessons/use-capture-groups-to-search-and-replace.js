 let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // recognizes (word word words)
let fixReplaceTextReg = /(\W\d)\s(\W\d)\s(\W\d)/; // Regex to change replaceText
let replaceText = "$3 $2 $1"; // Change this line
let fixNewText = "$2 $3 $1" // testing if my replace text works
let result = str.replace(fixRegex, replaceText);// "tree two one"
console.log(replaceText.replace(fixReplaceTextReg, fixNewText))//prints ($2 $1 $3)