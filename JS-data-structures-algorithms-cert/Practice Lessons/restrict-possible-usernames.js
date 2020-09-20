let username = "JackOfAllTrades";
let userCheck = /^[a-z](\d\d+|[a-z]+\d*)$/i; //had spaces between '|' symbol and code did NOT work, be very careful not to add any unwanted characters!
let result = userCheck.test(username);
