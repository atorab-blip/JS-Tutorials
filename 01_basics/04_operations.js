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
let z = 5;
console.log("Initial Value:", z);
z += 3; // x = x + 3
console.log("After += 3:", z);
z -= 2; // x = x - 2
console.log("After -= 2:", z);
z *= 4; // x = x * 4
console.log("After *= 4:", z);
z /= 2; // x = x / 2
console.log("After /= 2:", z);
z %= 3; // x = x % 3
console.log("After %= 3:", z);
z **= 2; // x = x ** 2
console.log("After **= 2:", z);
 
console.log("--------------------------------------------------");

console.log("Comparison Operators in JS");
let a = 10;
let b = '10';
console.log("a == b:", a == b); // true
console.log("a === b:", a === b); // false - datatype checked
console.log("a != b:", a != b); // false
console.log("a !== b:", a !== b); // true - datatype checked 
console.log("a > b:", a > b); // false
console.log("a < b:", a < b); // false
console.log("a >= b:", a >= b); // true
console.log("a <= b:", a <= b); // true

console.log("--------------------------------------------------");

console.log("Logical Operators in JS"); //AND, OR, NOT
let p = true;
let q = false;
console.log("p && q:", p && q); // false 
console.log("p || q:", p || q); // true
console.log("!p:", !p); // false
console.log("!q:", !q); // true

console.log("--------------------------------------------------");

let x = 3;
let y = 5;

console.log(x + y);
console.log("x" + y);
console.log(x + "y");
console.log("x" + "y");

console.log("--------------------------------------------------");
// Operator Precedence

console.log(3 + 2);
console.log("3" + 2);
console.log(3 + "2");
console.log("3" + "2");
console.log("3" + 2 + 2);
console.log(3 + 2 + "2");
console.log("3" + (2 + 2));

console.log(3 + 4 * 5 / 2 - 1);  //DMAS Rule