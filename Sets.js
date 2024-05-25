const mySet = new Set();

mySet.add(10);
mySet.add(20);
mySet.add(30);
mySet.add(40);

console.log(mySet);

mySet.delete(20);

console.log(mySet);

console.log(mySet.has(10));

const numbers = new Set();

numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(2);
numbers.add(3);
numbers.add(4);

const numbersArray = new Set();

numbersArray.add([1, 2, 3, 4, 5, 2, 3, 4]);

console.log(numbersArray);

console.log(numbers);

const numArr = [1, 2, 3, 4, 5, 2, 3, 4];
console.log(numArr);

const points = [10, 20, 10, 30, 15, 15, 35, 60, 10];

var uniquePoint = new Set();

for (let index = 0; index < points.length; index++) {
  console.log(points[index]);
  uniquePoint.add(points[index]);
}

console.log(uniquePoint);

// I knew this, LOL.
const cheatUniquePoint = new Set(points);
console.log(cheatUniquePoint);

const number = [10, 20, 15, 30, 15, 20, 35, 60, 10];

const numberDuplicate = new Set();

for (let index = 0; index < number.length; index++) {
  console.log(number[index]);
  if (numberDuplicate.has(number[index])) {
    console.log(`The duplicate are ${number[index]}`);
  } else {
    numberDuplicate.add(number[index]);
  }
}

const items = [
  {
    name: "banana",
    quantity: 1,
    price: 1.95,
  },

  {
    name: "apple",
    quantity: 1,
    price: 1.45,
  },

  {
    name: "banana",
    quantity: 10,
    price: 0.05,
  },

  {
    name: "candy",
    quantity: 1,
    price: 3.5,
  },
];

const results = [];

const duplicate = new Set();

for (let index = 0; index < items.length; index++) {
  console.log(items[index]);
  if (duplicate.has(items[index].name)) {
    continue;
  }

  results.push(items[index]);
  duplicate.add(items[index].name);
}

console.log(results);
console.log(items);
console.log(duplicate);
console.log(results);
