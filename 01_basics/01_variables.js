const accountID = 123456;
let accountEmail = "test@gmail.com";
var accountPassword = "1234";   
accountCity = "New York";

console.log("Accout Id:", accountID, );
console.log("Accout Email:", accountEmail);
console.log("Accout Password:", accountPassword);
console.log("Accout City:", accountCity);

// accountID = 234567; // error: Assignment to constant variable.
accountEmail = "tut@gmail.com"; // valid
accountPassword = "00000"; // valid
accountCity = "Los Angeles"; // valid  

console.log("\n\t--- After changes: ---");            //use \n for line shift and \t for tab space
console.log("Accout Id:", accountID, );
console.log("Accout Email:", accountEmail);
console.log("Accout Password:", accountPassword);
console.log("Accout City:", accountCity);

console.table({accountID, accountEmail, accountPassword, accountCity}); //displays data in table format

console.info("Account Info Printed Successfully!");
console.warn("This is a warning message!");
console.debug("This is a debug message!");
console.assert(4 === 3, "4 is not equal to 3"); //assertion failed message will be printed

/*
console.error("This is an error message!");
console.clear(); //clears the console
*/   