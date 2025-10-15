"use strict"; //strict mode

// 1. Primitive Data Types {NN BB SS U}
let num = 42; // Number 
let n = null; // Null

let bool = true;
let bigIntNum = 9007199254741991n; // BigInt

let str = "Hello, World!"; // String
let sym = Symbol("id"); // Symbol

let u; // Undefined

console.log("\tPermitive Data Types:");

console.log("Number:", num, "| Type:", typeof num);
console.log("Null:", n, "| Type:", typeof n); // typeof null is 'object'

console.log("Boolean:", bool, "| Type:", typeof bool);
console.log("BigInt:", bigIntNum, "| Type:", typeof bigIntNum);

console.log("String:", str, "| Type:", typeof str);
console.log("Symbol:", sym, "| Type:", typeof sym);

console.log("Undefined:", u, "| Type:", typeof u);

console.log("\n");

// 2. Non-Primitive Data Types
let arr = [1, 2, 3, 4, 5]; // Array
let obj = { name: "Alice", age: 30 };
let func = function() { return "Hello from function"; }; // Function
let date = new Date(); // Date

console.log("\tNon-Permitive Data Types:");

console.log("Array:", arr, "| Type:", typeof arr);
console.log("Object:", obj, "| Type:", typeof obj);
console.log("Function:", func(), "| Type:", typeof func);
console.log("Date:", date, "| Type:", typeof date);
console.log("\n");