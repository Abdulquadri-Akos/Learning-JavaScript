// const animal = ["dog", "cat", "lion", "tiger", "elephant", "camel", "monkey"];

// // const getElephant = animal[4];
// // console.log(getElephant);
// animal.push("zebra");
// animal.pop("zebra");
// console.log(animal.length);
// console.log(animal);
// animal.unshift("Zebra");
// animal.shift();

// animal.splice(2, 1, "Hello");

// for (let index = 0; index < animal.length; index++) {
//   var element = animal[index];

//   console.log(element);
// }

// const planet = ["Mercury", "Venus", "Earth", "Mars"];

// planet.push("Jupiter");
// planet.unshift("Sun");
// planet.pop();
// planet.pop();
// planet.shift();
// planet.shift();

// planet;

// let multiple = 5;
// let multipleArray = [10, 11, 12, 13, 14, 15];

// // for (let i = 0; i < multipleArray.length; i++) {
// //   result = multipleArray[i] * multiple
// //   console.log(`${multipleArray[i]} * ${multiple} = ${result}`);
// // }

// // let multipleArray = [10, 11, 12, 13, 14, 15];

// function mutipleOfFiveFuntion(multpleOfFive) {
//   return multpleOfFive * multiple;
// }

// let multipleResult = multipleArray.map(mutipleOfFiveFuntion);
// console.log(`The result of the multiple of 5 is ${multipleResult}`);

// var greetings = "Hello, nice to meet you";

// for (let index = 0; index < greetings.length; index++) {
//   const element = greetings[index];
//   console.log(element);
// }

// var total = 0;

// const grade = [55, 63, 82, 98, 91, 100];

// for (let i = 0; i < grade.length; i++) {
//   total = total + grade[i];
//   console.log(total);
// }

// console.log(Math.trunc(total / grade.length));

// let gradeSum = grade.reduce((prev, curr) => {
//   return prev + curr;
// });
// console.log(gradeSum / grade.length);

// function getAverage(prev, curr) {
//   return prev + curr;
// }

// var bakery = ["Cake", "Cookies", "Bread", "Scone"];
// bakery;

// var myBakery = bakery;

// myBakery.push("Crossant", "Granola");

// myBakery;
// bakery;

// const cities = ["London", "Vancouver", "Toronto", "New York", "Los Angeles"];
// console.log(cities.map((city) => city.toUpperCase()));
// cities.map(() => {});

// // function getCity(city) {
// //   return city.toUpperCase();
// // }

// const practice = [25, 26, 27, 28, 29, 30];

// // Using Arrow Function

// // const square = practice.map((practiceArray) => practiceArray ** 2);
// // console.log(square);

// // Using Function Declaration

// function square(practiceArray) {
//   return practiceArray ** 2;
// }

// let practiceResult = practice.map(square);

// console.log(practiceResult);

// const bool = [true, true, false, true, false, false];

// var getBoolResult = bool.map(Bools);

// console.log(getBoolResult);

// function Bools(boolArray) {
//   if (boolArray == true) {
//     return Math.random();
//   } else {
//     return 0;
//   }
// }

// const prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];

// var taxedPrices = prices.map(price);

// console.log(taxedPrices);

// function price(number) {
//   if (number > 10) {
//     return number * 1.2;
//   } else {
//     return number;
//   }
// }

// const item = ["light", "banana", "phone", "book", "mouse"];

// var itemPlurals = item.map(plurals);
// console.log(itemPlurals);

// function plurals(itemArray) {
//   if (itemArray === "mouse") {
//     return "Mice";
//   }
//   return itemArray + "s";
// }

// const row = [10, 20, 30, 40, 50];

// var rowMatrix = row.map(matrix);

// console.log(rowMatrix);

// // First Method
// // function matrix(each) {
// //   return [each];
// // }
// function matrix(each) {
//   const arr = [];
//   arr.push(each);
//   return arr;
// }

// const num = [5, 6, 7, 8, 9, 10];

// const numEven = num.filter((number) => {
//   return number % 2 === 0;
// });

// const numOdd = num.filter((number) => {
//   return number % 2 === 1;
// });

// console.log(
//   `The Even numbers are ${numEven} while the Odd numbers are ${numOdd}`
// );

// const countries = [
//   "France",
//   "South Africa",
//   "Brazil",
//   "United State",
//   "Sweden",
// ];

// const countryResult = countries.filter(getCountry);

// countryResult;

// function getCountry(country) {
//   if (country.includes(" ")) {
//     return true;
//   }
// }

var prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];

var LowPrice = prices.filter(lowPrices);

LowPrice;

function lowPrices(price) {
  if (price * 0.15 < 10) {
    return true;
  } else {
    return false;
  }
}

const values = [
  [1, 2, 3],
  [0, 0, 1],
  [3, 6, 9],
  [0, 1, 2],
];

var hasTwos = values.filter(getValues);
console.log(values);
console.log(hasTwos);

function getValues(value) {
  return value.includes(2);
}

const nums = [10, 20, 30, 40, 50];

const timesTwo = nums.map((number) => {
  return number * 2;
});

const over50 = timesTwo.filter((number) => {
  if (number > 50) {
    return true;
  }
  return false;
});

console.log(over50);
console.log(timesTwo);
console.log(nums);

// Let speak about Array.reduce
const numbers = [5, 10, 15, 20, 25, 30, 35];
var element = 0;

for (let index = 0; index < numbers.length; index++) {
  element = numbers[index] + element;
  console.log(element);
}

const numbersSum = numbers.reduce((prev, curr) => {
  console.log(prev, curr);
  return prev + curr;
}, 0);

console.log(numbersSum);

const fruit = ["Orange", "Banana", "Mango"];
fruit;

fruit.pop(1);

console.log(fruit);

fruit.push("Apple");

fruit;
fruit.shift("");

fruit;

fruit.unshift("Kiwi");

fruit;

fruit.splice(1, 2, "Pineapple");
fruit.slice(3);

fruit;

console.log(fruit);
console.log(fruit.slice(2, 4));
console.log(fruit.length);
console.log(fruit.indexOf("Banana"));
fruit;
