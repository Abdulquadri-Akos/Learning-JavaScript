// // Array.map
// var names = ["Akosile", "Abdulquadri", "Oluwatosin"];

// var upperCaseNames = names.map(callBackEach);

// var capitalEachCase = names.map((each) => capitalEachCase(each));
// // var capitalEachCase = names.map(capitalEachCase); Calling the created capitalEachCase function as a callback function within our map method
// capitalEachCase;
// // var upperCaseNames = names.map((each) => each.toUpperCase());

// var result = upperCaseNames;

// console.log(result);

// function callBackEach(each) {
//   return each.toUpperCase();
// }

// // Capital each work

// function capitalEachCase(str) {
//   let firstLetter = str[0];
//   let restLetter = str.slice(1);

//   return firstLetter.toUpperCase() + restLetter.toLowerCase();
// }

// console.log(capitalEachCase("akosile"));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var doubleNumbers = numbers.map(doubleNumber).map(add5);

var filterNumbers = numbers.filter(evenNumber);
filterNumbers;

var filterOddNumbers = numbers.filter(oddNumber);
filterOddNumbers;

console.log(doubleNumbers);

function doubleNumber(num) {
  return num * 2;
}

function add5(num) {
  return num + 5;
}

function evenNumber(num) {
  return num % 2 === 0;
}

function oddNumber(num) {
  return num % 2 === 1;
}

let fruit = [
  "apple",
  "orange",
  "mango",
  "banana",
  "pear",
  "grape",
  "apple",
  "orange",
  "mango",
  "banana",
  "pear",
  "grape",
];

var fruitLength = fruit.map(getFruitLength, 0);
console.log(fruitLength);

function reduceFruit(prev, curr, currIndex, array) {
  console.log(prev, curr, currIndex, array);

  if (prev[curr]) {
    prev[curr] += 1;
  } else {
    prev[curr] = 1;
  }
  console.log(prev);
  return prev;
}

var reduceFruit = fruit.reduce(reduceFruit, {});
reduceFruit;

function getFruitLength(prev, curr, currIndex, array) {
  console.log(prev, curr, currIndex, array);
  return curr + 1;
}


