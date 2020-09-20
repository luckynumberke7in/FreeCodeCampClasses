let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // matches the shortest object between brackets . for any char, * for multiple characters leading, and ? to the shortest version instead of longest.
let result = text.match(myRegex);
