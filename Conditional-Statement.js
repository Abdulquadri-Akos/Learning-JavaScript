// Condition Statement using If, else if and ternary operator
// Switch
// Create dice
var dice = 2;

if (dice === 1) {
  console.log("You rolled one");
} else if (dice === 2) {
  console.log("You rolled two");
} else if (dice === 3) {
  console.log("You rolled three");
} else if (dice === 4) {
  console.log("You rolled four");
} else if (dice === 5) {
  console.log("You rolled five");
} else if (dice === 6) {
  console.log("You rolled six");
}

// Using Ternary Operator
dice === 1
  ? console.log("You rolled one")
  : dice === 2
  ? console.log("You rolled two")
  : dice === 3
  ? console.log("You rolled three")
  : dice === 4
  ? console.log("You rolled four")
  : dice === 5
  ? console.log("You rolled five")
  : dice === 6
  ? console.log("You rolled six")
  : console.log("Invalid Dice");

// Switch
switch (dice) {
  case 1:
    console.log("You rolled one");
    break;
  case 2:
    console.log("You rolled two");
    break;
  default:
    break;
}

// Function
// Function Declaration
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var result = addTwoNumbers(2, 3);
console.log(result);

// Function Expression

const addExpression = function (num1, num2) {
  return num1 + num2;
};

var result = addExpression(2, 3);
console.log(result);

// Arrow Function
const addArrowFunction = (num1, num2) => {
  return num1 + num2;
};

var result = addArrowFunction(2, 3);
console.log(result);

// Oneliner Arrow Function
const addArrowOneLiner = (num1, num2) => num1 + num2;
var result = addArrowOneLiner(2, 3);
console.log(result);

function add(num1, num2) {
  if (!num1 || num2) {
    console.log("I cannot be called");
    throw new Error("You must provide two numbers");
  }
}

const addArrowOneLinerError = (num1, num2) =>
  num1 == undefined || num2 == undefined
    ? console.log("Error, ko possible")
    : num1 + num2;
addArrowOneLinerError();

function nameUpperCase(name) {
  return name.toUpperCase();
}

var nameResult = nameUpperCase("Abdulquadri");
nameResult;

const nameExpression = function nameLowerCase(name) {
  return name.toLowerCase();
};

var nameLower = nameExpression("ABDULQUADRI");
nameLower;

const nameArrowFunction = (name) => {
  return name + "!";
};

var exclamationResult = nameArrowFunction("Abdulquadri");
exclamationResult;

// Storing the parameter inside an Object.  The return is called using () instead of using a return keyword.
let obj1 = (name, age) => ({
  name,
  age,
});

let objResult = obj1("Abdulquadri", 99);
console.log(objResult);

// Testing with a Function Declaration

function objDeclaration(name, age) {
  return {
    name,
    age,
  };
}

let objDeclarationResult = objDeclaration("Qudus", 22);
objDeclarationResult;

// Object Declaration
var objectD = {};

objectD.name = "Abdulquadri";
objectD.age = 22;
objectD["Occupation"] = "Software Developer";

delete objectD["Occupation"];
objectD["Occupation"] = "Software Developer";

var printObjectD = objectD;
console.log(printObjectD);

var checkObject = "name" in objectD;
var checkAge = objectD.hasOwnProperty("age");
console.log(checkAge);
console.log(checkObject);

// Writing object within function
function objectFunction(name, age) {
  let obj2 = {};
  obj2["name"] = name;
  obj2.age = age;

  return obj2;
}

var objectFunctionResult = objectFunction("Abdulquadri", 22);
console.log(objectFunctionResult);

// Arrays
var arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrayPosition = arrayNumbers[0];
console.log(arrayPosition);
var arrayLength = arrayNumbers.length;
console.log(arrayLength);

//Array Method
// Push, Pop, Shift, Unshift, indexOf, splice, slice, concat, includes, reverse, join, fill, filter, map, reduce, forEach, at, find, findIndex

// Summation Function
function summation() {
  // Declare a rest variable
  let sum = 0;
  // Write your loop to move around the Array numbers
  for (let i = 0; i < arrayNumbers.length; i++) {
    // Store the sum + the loop array into the rest variable
    sum = sum + arrayNumbers[i];
  }

  // return the new value of the rest variable
  return sum;
}

// The function should return the whole functionality result
var summationResult = summation();
console.log(summationResult);

// Reduce method
const reduceCallBack = function (prev, curr, index, arrayNumbers) {
  console.log({ prev, curr, index, arrayNumbers });
};
arrayNumbers.reduce(reduceCallBack);

// function takeWithYou(msg) {
//   if (msg) {
//     console.log(msg);
//   } else {
//     console.log("No message");
//   }
// }

// takeWithYou("");

// const takeWithYou = (msg) => (msg) ? console.log(msg) : console.log("No message")
// takeWithYou("Grace")

// let scorePoint = 30;

// if (scorePoint > 30) {
//   console.log("You are a winner");
// } else if (scorePoint > 20) {
//   console.log("You are a good player");
// } else {
//   console.log("You are a loser");
// }

// Conditional Statement Exercise
let point = 15;

if (point > 20) {
  point -= 10;
}

console.log(`The final result of the ${point}`);

// console.log("---Animal Checker Program---");

// var animal = "dog";

// if (animal === "cat") {
//   console.log("Meow");
// } else if (animal === "dog") {
//   console.log("Woof");
// } else {
//   console.log("Must be an alien");
// }

// console.log("---Animal Check Complete---");

let number = 3;

if (number % 2 === 0) {
  console.log("Even Number");
} else {
  console.log("Odd Number");
}

let message = "Akosile Abdulquadri";
let num = 0;

while (num <= 3) {
  console.log(message);
  num++;
}

// let score = 5;

// // while (true) {
// //   console.log("inside the loop!");

// //   if (score >= 3) {
// //     continue;
// //   }

// //   score++;
// // }

// while (score <= 10) {
//   console.log(score);
//   score++;
// }

// let loggedIn = false;
// let count = 0;

// while (!loggedIn) {
//   console.log(count);
//   if (count === 2) {
//     loggedIn = true;
//   }

//   count++;
// }

// console.log("successfully logged in");

// let value = 10;

// while (value <= 40) {
//   // if (value % 2 === 0) {
//   //   console.log(value);
//   // }

//   if (value % 2 === 1) {
//     console.log(value);
//   }

//   value++;
// }

// let runs = 1;

// while (runs <= 100) {
//   if (runs % 10 == 0) {
//     console.log(`Checkpoint ${runs}!`);
//   }

//   if (runs === 50) {
//     console.log("Half Way There");
//     runs++;
//     continue;
//   }

//   if (runs === 100) {
//     console.log("You made it ");
//     runs++;
//     continue;
//   }

//   runs++;
// }

// console.log("All done");

// for (let index = 5; index <= 10; index++) {
//   console.log(index);
// }

// for (let index = 10; index <= 40; index++) {
//   console.log(index);
//   if (index % 2 === 1) {
//     console.log(`Even Odd are ${index}`);
//   }
// }

