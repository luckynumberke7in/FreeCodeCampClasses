let hello = "   Hello, World!  ";
let wsRegex = /(^\s+)(\w+\W)\s(\w+\W)(\s+$)/g; // Change this line
let result = hello.replace(wsRegex, "$2 $3"); // Change this line
