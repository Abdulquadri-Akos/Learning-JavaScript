let age = 10,
  ageString = age.toString();
//You can also convert to binary using the toString() method
ageBinary = age.toString(16);
console.log(ageBinary);
console.log(ageString);
// Convert Using String Constructor
ageBinaryString = String(ageBinary);
ageBinaryString;

// You can also convert using Number Constructor
let number = 10.86;
let numberConstructor = Number(number);
let numberParseInt = parseInt(number);
let numberParseFloat = parseFloat(number);
console.log(numberConstructor);
console.log(numberParseInt);
console.log(numberParseFloat);

let numberUnary = +number;
console.log(typeof numberUnary);
console.log(numberUnary);
console.log(0.1 + 0.2);

let count = 10;
count %= 2;
console.log(count);

//Increment 
// Pre In

