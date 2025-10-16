let numVar = 23;
console.log("Number:", numVar, "| Type:", typeof numVar);

let strNum = String(numVar);
console.log("Number changed to string:", strNum, "| Type:", typeof strNum);

console.log("--------------------------------------------------");

let nullVar0 = 0;
console.log("Null variable:", nullVar0, "| Type:", typeof nullVar0);

let boolNull0 = Boolean(nullVar0);
console.log("Null changed to Booean:", boolNull0, "| Type:", typeof boolNull0);

let nullVar1 = 1;
console.log("Null variable:", nullVar1, "| Type:", typeof nullVar1);

let boolNull1 = Boolean(nullVar1);
console.log("Null changed to Booean:", boolNull1, "| Type:", typeof boolNull1);

console.log("--------------------------------------------------");

let strVar = "34";
console.log("String variable:", strVar, "| Type:", typeof strVar);

let numStr = Number(strVar);
console.log("String changed to Number:", numStr, "| Type:", typeof numStr);

console .log("--------------------------------------------------");
let value = 3;
let negValue = -value;
console.log("Value:", value, "| Type:", typeof value);
console.log("Negative Value:", negValue, "| Type:", typeof negValue);