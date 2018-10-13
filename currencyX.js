var currency ={Euro: 0.864, 
Pound: 0.760, 
Rupee: 73.623, 
AUD: 1.405, 
CAD: 1.302, 
SAD: 1.378, 
Franc: 0.991, 
Ringgit: 3.1555, 
YenJ: 112.192, 
YenC: 6.9101}; 

var readline = require('readline-sync'); 
var amount = readline.question("How much money do you have in USD? ");
console.log("You have " + amount + " in USD.");
console.log("You can convert to the following currencies: " + Object.keys(currency)); 

var readline = require('readline-sync'); 
var money = readline.question("Which currency would you like to convert to? ");
console.log("You have " + amount*currency[money] + " in " + money);








