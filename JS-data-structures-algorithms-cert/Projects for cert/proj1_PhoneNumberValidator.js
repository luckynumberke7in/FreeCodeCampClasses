/*				JavaScript Algorithms and Data Structures Projects: Telephone Number Validator

Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

    555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.
Passed
telephoneCheck("555-555-5555") should return a boolean.
Passed
telephoneCheck("1 555-555-5555") should return true.
Passed
telephoneCheck("1 (555) 555-5555") should return true.
Passed
telephoneCheck("5555555555") should return true.
Passed
telephoneCheck("555-555-5555") should return true.
Passed
telephoneCheck("(555)555-5555") should return true.
Passed
telephoneCheck("1(555)555-5555") should return true.
Passed
telephoneCheck("555-5555") should return false.
Passed
telephoneCheck("5555555") should return false.
Passed
telephoneCheck("1 555)555-5555") should return false.
Passed
telephoneCheck("1 555 555 5555") should return true.
Passed
telephoneCheck("1 456 789 4444") should return true.
Passed
telephoneCheck("123**&!!asdf#") should return false.
Passed
telephoneCheck("55555555") should return false.
Passed
telephoneCheck("(6054756961)") should return false
Passed
telephoneCheck("2 (757) 622-7382") should return false.
Passed
telephoneCheck("0 (757) 622-7382") should return false.
Passed
telephoneCheck("-1 (757) 622-7382") should return false
Passed
telephoneCheck("2 757 622-7382") should return false.
Passed
telephoneCheck("10 (757) 622-7382") should return false.
Passed
telephoneCheck("27576227382") should return false.
Passed
telephoneCheck("(275)76227382") should return false.
Passed
telephoneCheck("2(757)6227382") should return false.
Passed
telephoneCheck("2(757)622-7382") should return false.
Passed
telephoneCheck("555)-555-5555") should return false.
Passed
telephoneCheck("(555-555-5555") should return false.
Passed
telephoneCheck("(555)5(55?)-5555") should return false.
*/


function telephoneCheck(str) {
 // let numRegexV1 = /(^\+?1?)(\s?\(?|\-?)[2-9]\d{2}(\)?\s?|-?)\d{3}(\s?|\-?)\d{4}$/g;
//v1, works on all phone number instances except validating both parenthesis!

  let numRegex = /(^\+?1?)[- ]?(\([2-9]\d{2}\)|[2-9]\d{2})[- ]?(\d{3})[- ]?(\d{4})$/g;
//     (optional international)  (area code w/w.o '()')      (1st 3 digits) (last 4)
//[- ]? skips dashes and spaces
  //checks all valid versions for US phone numbers ONLY!
  
  //ignores spaces, dashes, verifies or skips '()' but will fail with only 1 '(' in other location, + and 1 at head are optional.
  let result = numRegex.test(str);
  //console.log(result);// remove // at head for debugging.
  //console.log(str.match(numRegex));//remove // at head for debugging.
  return result;
}

telephoneCheck("555-555-5555"); //all above tests pass with this regex + test method =]




/*                        Ceasars Cypher / rotate by 13 problem!


JavaScript Algorithms and Data Structures Projects: Caesars CipherPassed

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
rot13("SERR PBQR PNZC") should decode to FREE CODE CAMP
rot13("SERR CVMMN!") should decode to FREE PIZZA!
*/



function rot13(str) {
  // make variables to catch upper and lowercase characters. (extra)
  const alphaLower = "abcdefghijklmnopqrstuvwxyz";
  const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // figure out decoding stuff, split string, then take each letter and do specified function...
  let decoded = str.split("").map(letter => {
    // test for upper and lower keys.
    let uKey = alphaUpper.indexOf(letter)
    let lKey = alphaLower.indexOf(letter)
    //console.log(uKey); // testing to see if it catches
    // perform different tasks based on upper and lowercase
    if (uKey >= 0) {
      //console.log(uKey); // testing for catch
      // give back the uKey, 13 spaces forward divided by 26 and get the remainder (the decoded capital letter)
      return alphaUpper[(uKey + 13) % 26];
      // same thing as above, but lowercase.
    } else if (lKey >= 0) {
      return alphaLower[(lKey + 13) % 26];
      // if "letter" is not a letter, return the character.
    } else {
      return letter;
    }
  })
  console.log(decoded.join('')); // testing.
  // return the decoded array, after joining all the characters back together!
  return decoded.join('');
}

rot13("SeRr YbIr 4 @yy!");
rot13("SERR PBQR PNZC");









//                               PROJECT 2, PALINDROME CHECKER!

/*


Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

*/


function palindrome(str) {
  // Make new string with all letters lowercase, and strip all non-alphanumeric characters.
  let nStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  console.log(nStr); // debugging
  // Make array for string to decode.
  let strArray = nStr.split("");
  console.log(strArray);// Debugging

  // Make a function to check if it's a palindrome
  let newPalCheck = () => {
    //console.log(strArray.reverse().join("")); //testing
    // Reverse array, join both arrays to 1 string each and check if they are equal to each other!
    return (strArray.join('') === strArray.reverse().join(''))
  };
  //and invoke said function.
  newPalCheck();// uses a simple t/f question and returns value.
  // done =]
};

palindrome ("never odd or even")
palindrome ("poop");
palindrome("eye");
palindrome("abdefl");























//                        THIS WILL CONVERT TEMPS F & C BOTH WAYS!


// this function converts celcius to fahrenheit!
function convertToF(celsius) {
  let fahrenheit = (celsius*9/5)+32;//f = 1.8c + 32 degrees (in f)
  return fahrenheit;
}
// this function converts fahrenheit to celcius!
function convertFtoT(fahrenheit) {
  let celsius = (fahrenheit - 32)/9*5;// reverse equation as above!
  return celsius;
}
//convertToF(30);
//console.log(convertToF(30));// remove // to bebug!
//console.log(convertFtoT(86));// remove // to bebug!



//                     REVERSES A STRING!

function reverseString(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {//starts @ end of str and appends each character backwards to 'reverse' variable.
    reverse += str[i];
  }
  console.log(reverse);

  return reverse;// sends out of function.
}

//reverseString("hello");





//                         FACTORIALIZE A NUMBER!


function factorialize(num) {
  if (num === 0) {//makes sure fac0 === num*1 like it should be!
    return 1;
  }
    for (let i = num - 1; i > 0; i--) {//starts i 1 below num (for proper fac)
      //console.log(num = num * i); // for debugging.
      //console.log(i) // starts @ 4
      num = num * i;//takes equation and stores answer (then that gets repeated with new value *i-1)
    }
  return num;
}

factorialize(5);
console.log(factorialize(5));



//                     FINDS AND RETURNS LENGTH OF LONGEST WORD IN STRING



function findLongestWordLength(str) {
  return Math.max//takes max of final command (.map=>word.length)
  (...str.split(" ")//strips spaces from str and returns array of words
  .map(word => word.length));//another new array, but with each words length
}
// above === return Math.max(...str.split(" ").map(word => word.length));

findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));//debugging + explaination.



//                     FINDS LARGEST NUMBER IN A GIVEN ARRAY


function largestOfFour(arr) {
  //make array to store all values in 1 layer.
  //.map expects a function callback.
  return arr.map(Function
  .apply        //used to take an array for Math.max (doesnt normally)
  .bind         // glues whole thing together 
                // by making the callback a function!
  (Math.max,    //finds max item in arr (ignores null)
  null));       //added because .apply needs a callback, 
                //but we don't want to use it.
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);



//                       TEST IF A STRING ENDS WITH A TARGETED LETTER/WORD/NUMBER.
//                                  USING REGEX


function confirmEnding(str, target) {
  //create test for if target === end of str
  let endRegex = new RegExp(target + '$');
  //RegExp is a function constructor for Regex's and is used to add a variable to a regex!
  return endRegex.test(str);
}//returns t/f of result.

confirmEnding("Bastian", "n");
console.log(confirmEnding("Bastian", "n"))




//                      SPLIT AN ARRAY INTO AN ARRAY HOLDING 2 EQUAL-LENGTH ARRAYS




//        Testing Recusive Invocation
function chunkArrayInGroups(arr, size) {
  //ternary checking if length of array is shorter than size
  return (arr.length <= size)
    //if so, return arr
    ? [arr] // Need [] here or else final arr won't return as an array.

    //else, recursive call, slicing arr 2x and concatinating them together
    : [arr.slice(0, size)].concat(chunkArrayInGroups(arr.slice(size), size)
    );
    //[] separates part 1 (0th position - size variable) to its own array
    // then recursion is called slicing the full array in half (back half)
    // in 2nd call of function, arr is shorter than size, so it returns array of 2nd half
    // then the 2 halves are added together with .concat at the end!
}

/*        Splice version I figured out.
function chunkArrayInGroups(arr, size) {
  let newArr = arr;
  let spliceArr = [];
  spliceArr.push(newArr.splice(0, size));
  spliceArr.push(newArr.splice(0, size));
  //console.log(spliceArr)
  return spliceArr;
} */
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2))
chunkArrayInGroups(["a", "b", "c", "d"], 2);
