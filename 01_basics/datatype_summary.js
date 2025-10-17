/*

Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/


//------------------- Memoy --------------------
// Stack Memory → Primitive Datatypes
// Heap Memory → Non-primitive Datatypes

let Name = "Ali";
let fName = Name;

console.log("Name :", Name);
console.log("fName :", fName);

Name = "Ahmed";
console.log("After Updating Name");
console.log("Name :", Name);
console.log("fName :", fName);
// Here fName is not affected because it is stored in Stack Memory

let arr1 = ["item1", "item2"];
let arr2 = arr1;

console.log("arr1 :", arr1);
console.log("arr2 :", arr2);

arr1.push("item3");
console.log("After Updating arr1");
console.log("arr1 :", arr1);
console.log("arr2 :", arr2);
// Here arr2 is affected because it is stored in Heap Memory
// Both arr1 and arr2 are pointing to the same location in Heap Memory 