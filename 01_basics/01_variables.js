const accountID = 123456;
let accountEmail = "test@gmail.com";
var accountPassword = "1234";   
accountCity = "New York";

console.log("Accout Id:", accountID, );
console.log("Accout Email:", accountEmail);
console.log("Accout Password:", accountPassword);
console.log("Accout City:", accountCity);

// accountID = 234567; // error: Assignment to constant variable.
accountEmail = "test@gmail.com"; // valid
accountPassword = "12345"; // valid
accountCity = "Los Angeles"; // valid  

console.log("\n\t--- After changes: ---");            //use \n for line shift and \t for tab space
console.log("Accout Id:", accountID, );
console.log("Accout Email:", accountEmail);
console.log("Accout Password:", accountPassword);
console.log("Accout City:", accountCity);