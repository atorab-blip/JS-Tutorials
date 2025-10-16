/*console.log("Hello, World!");  
console.log("Welcome to JavaScript basics.");*/

console.log("Variables (let annd var) in JavaScript");
let a = 5;
var b = 6;

console.log(a);
console.log(b);

a = 10;
b = 12;

console.log(a);
console.log(b); 

console.log("\n---------------------\n");

console.log("Variables (const) in JavaScript");
const c = 5;
const d = 6;

console.log(c);
console.log(d);

console.log("\n---------------------\n");

//Primitives Data Types (nn bb ss u)
console.log("Prmitive Data Types in JS")
let numVar = 1;
let nullVar = null;

let boolVar = true;
let bigintVar = 1234567890123456789012345678901234567890n;

let strVar = "Hello, World! I'a Ali Torab";
let symVar = Symbol("This is a symbol");

let undefinedVar = undefined;

console.log("Number:", numVar, "| Type of:", typeof numVar);
console.log("Null:", nullVar, "| Type of:", typeof nullVar);

console.log("Boolean:", boolVar, "| Type of:", typeof boolVar);
console.log("BigInt:", bigintVar, "| Type of:", typeof bigintVar);

console.log("String:", strVar, "| Type of:", typeof strVar);
console.log("Symbol:", symVar, "| Type of:", typeof symVar);

console.log("Undefined:", undefinedVar, "| Type of:", typeof undefinedVar);

console.log("\n---------------------\n");

//Non-Primitives Data Types (o a f)
console.log("Non-Prmitive Data Types in JS")
let objVar = {name: "Ali Torab", age: 22, city: "Tehran"};
let arrVar = [0, 1, 2, 3, 4, 5];
let funcVar = function() { return "This is a function"; };

console.log("Object Name:", objVar.name, "| Type of:", typeof objVar.name);
console.log("Array:", arrVar, "| Type of:", typeof arrVar);
console.log("Function:", funcVar, "| Type of:", typeof funcVar)

console.log("\n---------------------\n");

console.log("Data Type Conversion in JS")

let numtostr = String(123);
console.log("Number to String:", numtostr, "| Type of:", typeof numtostr);

let strtonum = "123";
console.log("String to Number:", strtonum, "| Type of:", typeof strtonum);

let numtonull = 0;
console.log("Number to Null:", numtonull, "| Type of:", typeof numtonull);

let nulltonum = null;
console.log("Null to Number:", nulltonum, "| Type of:", typeof nulltonum);

let strtobool = "Hello";
console.log("String to Boolean:", strtobool, "| Type of:", typeof strtobool);

let booltostr = true; 
console.log("Boolean to String:", booltostr, "| Type of:", typeof booltostr);

