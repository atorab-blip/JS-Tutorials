let array01 = [1, 2, 3, 4];     // same data type - numbers
console.log("Array 01:", array01);

array01 = ["Apple", "Banana", "Orange"];    // same data type - strings
console.log("Modified Array 01:", array01);

const array02 = ["1, 2 , 3, 4"];    
console.log("Array 02:", array02);
console.log("Type of Array 02:", typeof array02);

const array03 = [21, 34, "Ali Torab", age = 23, true];   // different data types
console.log("Array 03:", array03);
console.log("Type of Array 03:", typeof array03);

/*
const array03  = ["Ali Torab", "GitHub", "VS Code", "JavaScript"];
console.log("Array 03:", array03);

array built using const can't be changed to a different array, same as of the variables
*/

const myArray01 = new Array(10, 20, 30, 40);    // using Array keywords
console.log("My Array 01 (using keywords):", myArray01);

const myArray02 = new Array("Red", "Green", "Blue");
console.log("My Array 02 (using keywords):", myArray02);
console.log("Value at 2nd index of My Array 02:", myArray02[2]);

myArray02[3] = "Yellow";    // adding new element at 3rd index
console.log("Modified My Array 02:", myArray02);
console.log("Length of My Array 02:", myArray02.length);    // length property

console.log("--------------------------------------------------")

console.log("Original Array 02:", myArray02);

myArray02.push("Purple");   // adding new element at the end
console.log("After push, My Array 02:", myArray02);

myArray02.pop();    // removing last element
console.log("After pop, My Array 02:", myArray02);

myArray02.unshift("Pink");  // adding new element at the beginning
console.log("After unshift, My Array 02:", myArray02);

myArray02.shift();    // removing first element
console.log("After shift, My Array 02:", myArray02);

myArray02.includes("Green");   // checking if element exists
console.log("Does My Array 02 include 'Green'?:", myArray02.includes("Green"));

myArray02.indexOf("Blue");    // getting index of an element
console.log("Index of 'Blue' in My Array 02:", myArray02.indexOf("Blue"));

