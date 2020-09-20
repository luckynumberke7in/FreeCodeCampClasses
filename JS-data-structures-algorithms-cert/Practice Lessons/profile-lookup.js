// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
  for (var n = 0; n < contacts.length; n++) {
    if (contacts[n].firstName === name) {
      if (prop in contacts[n]) { // executes when 1st 'if' is true
        return contacts[n][prop]; // executes when 2nd 'if' is true
      } else {
        return "No such property"; // executes when 1st 'if' is true, but 2nd is false
      }
    }
  }
  return "No such contact"; //executes when 1st 'if' is false


// Only change code above this line
}

lookUpProfile("Akira", "likes");
