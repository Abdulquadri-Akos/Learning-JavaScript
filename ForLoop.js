// let loggedIn = false;
// for (loggedIn; (loginIndex = 0), !loggedIn; loginIndex = loginIndex + 1) {
//   console.log("Incorrect Login Credentials");

//   if (loginIndex === 2) {
//     loggedIn = true;
//     console.log(loggedIn);
//   }
// }

// console.log("Successfully logged in");

// var numLoop = 1;

// for (numLoop; numLoop <= 100; numLoop++) {
//   if (numLoop % 10 == 0) {
//     console.log(`Checkpoint ${numLoop}!`);
//   }

//   if (numLoop === 50) {
//     console.log("Half Way There");
//     continue;
//   }

//   if (numLoop === 100) {
//     console.log("You made it ");
//   }
// }

// Function Regular
// function sum(num1, num2) {
//   return num1 + num2;
// }

// var result = sum(10, 20);
// console.log(result);

// Function Expression
const sumExpression = function sum(num1, num2) {
  return num1 + num2;
};

var result = sumExpression(10, 20);
console.log(result);

// Function Regular
const numberArrow = (num1, num2) => num1 + num2;

var result = numberArrow(10, 20);
console.log(result);

const hello = () => {
  console.log("Hello World");
  return "Hello World";
};

const helloResult = hello();
console.log(helloResult);

function chill(chillMessage, chillNumbers) {
  console.log("Doing some chilling");
  for (let i = 1; i <= chillNumbers; i++) {
    console.log(`${chillMessage} ${i}`);
  }
  console.log("That was ice cold!");
}

chill("Chill", 10);

function noReminder(number, mod) {
  if (number % mod === 0) {
    return true;
  } else {
    return false;
  }
}

// convert to Arrow Function

// const noReminder = (number, mod) => {
//   if (number % mod === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(noReminder(10, 7));
// console.log(noReminder(100, 10));

// function login(username, password) {
//   if (username === "admin" && password === password) {
//     return true;
//   } else if (username === "monkey" && password === "123") {
//     return true;
//   } else if (username === "moomoo" && password === "farm") {
//     return true;
//   } else {
//     return false;
//   }
// }

function login(username, password) {
  if (username === "admin" && password === password) {
    return true;
  }

  if (username === "monkey" && password === "123") {
    return true;
  }

  if (username === "moomoo" && password === "farm") {
    return true;
  }
  return false;
}
const test = login("farm", "farm");

console.log(test);

function square(num) {
  return num ** 2;
}

function sumOfSquares(num1, num2) {
  return square(num1) + square(num2);

  // return square(num1 + num2); // This will return the square of the sum of the two numbers
}

const sum1 = sumOfSquares(2, 3);
console.log(sum1);
