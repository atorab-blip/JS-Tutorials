console.log("Operators in JS");

let val1 = 10
let val2 = 2;

console.log("Addition:", val1 + val2);
console.log("Subtraction:", val1 - val2);
console.log("Multiplication:", val1 * val2);
console.log("Division:", val1 / val2);
console.log("Modulus:", val1 % val2);
console.log("Exponentiation (Power):", val1 ** val2);
console.log("Increment:", ++val1);
console.log("Decrement:", --val2);
console.log("--------------------------------------------------");

console.log("Assignment Operators in JS");
let x = 5;
console.log("Initial Value:", x);
x += 3; // x = x + 3
console.log("After += 3:", x);
x -= 2; // x = x - 2
console.log("After -= 2:", x);
x *= 4;
console.log("After *= 4:", x);
x /= 2;
console.log("After /= 2:", x);
x %= 3;
console.log("After %= 3:", x);
x **= 2;
console.log("After **= 2:", x);
console.log("--------------------------------------------------");

console.log("Comparison Operators in JS");
let a = 10;
let b = '10';
console.log("a == b:", a == b); // true
console.log("a === b:", a === b); // false
console.log("a != b:", a != b); // false
console.log("a !== b:", a !== b); // true
console.log("a > b:", a > b); // false
console.log("a < b:", a < b); // false
console.log("a >= b:", a >= b); // true
console.log("a <= b:", a <= b); // true
console.log("--------------------------------------------------");

console.log("Logical Operators in JS");
let p = true;
let q = false;
console.log("p && q:", p && q); // false
console.log("p || q:", p || q); // true
console.log("!p:", !p); // false
console.log("!q:", !q); // true
console.log("--------------------------------------------------");