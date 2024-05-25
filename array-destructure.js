//ARRAY DESCTRUCTURING
const cities = [
  "Vancuver",
  "Mexico City",
  "New York City",
  "Los Angeles",
  "London",
];

// const Vancuver = cities[0];

// console.log(Vancuver);

//We can do this better with destructure

const [, MexicoCity, NewYorkCity, LosAngeles, London] = cities;

console.log(London);
console.log(cities.length);

// const city = ["Cairo", "Tehram"];

// const [, Tehram, Beijing] = city;

// console.log(Tehram);
// console.log(Beijing);

const city = ["Cairo", "Tehram"];

const [, Tehram, Beijing = "Beijing"] = city;

console.log(Tehram);
console.log(Beijing);

const country = ["Nigeria", "Ghana", "Togo", "Benin", "Niger"];

const [Nigeria, ...rest] = country;

console.log(...rest);

// destrcture string

const [letter1, letter2] = "Hello friend";
console.log(letter1, letter2);

const numbers = new Set();
numbers.add(5);
numbers.add(10);

const [five, then] = numbers;
console.log(five, then);

const groceries = new Map();
groceries.set("apple", 25);
groceries.set("banana", 100);

const [apple, banana] = groceries;
console.log(apple, banana);
