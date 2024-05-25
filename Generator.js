// const counter = function* () {
//   yield 1;
//   yield 2;
//   yield 3;
// };

// console.log(typeof counter);
// console.log(counter);
// // create a generator object

// // const count = counter(); // The generator object is also an Iterator

// // for (const con of count) {
// //   console.log(con);
// // }

// // // console.log(count);
// // console.log(count.next());
// // // console.log(count);
// // console.log(count.next());
// // // console.log(count);
// console.log(count.next());

const numbers = function* () {
  let i = 0;
  while (true) {
    yield i;
    i++;
  }
};

const number = numbers();

let con = 0;

// while (con < 5) {
//   console.log(number.next());
//   con++;
// }

for (con; con < 5; con++) {
  console.log(number.next());
}

const digit = function* () {
  yield 1;
  yield* [2, 3, 4];
  yield 5;
};

const digitObject = digit();

for (const dig of digitObject) {
  console.log(dig);
}

const countTo10 = function* () {
  for (let i = 0; i <= 10; i++) {
    yield i;
  }
};

const object10 = countTo10();

for (let objectTen of object10) {
  console.log(objectTen);
}

const randomNumber = function* () {
  for (let i = 0; i <= 10; i++) {
    random = Math.random();
    yield random;
  }
};

const randomNumberObject = randomNumber();

for (let random of randomNumberObject) {
  console.log(random);
}

const randomAmountFromRange = function* (amount, min, max) {
  for (let i = 0; i < amount; i++) {
    yield Math.floor(Math.random() * (max - min + 1) + min);
  }
};

const randomObject = randomAmountFromRange(3, 10, 20);

for (const random of randomObject) {
  console.log(random);
}

const getRandomNumber = function* () {
  for (let i = 0; i < 5; i++) {
    yield Math.floor(Math.random() * (10 - 1 + 1) + 1);
  }
};

const groceryList = function* () {
  groceries = ["Avacado", "Cookie", "Milk", "Soup", "Soda"];

  const groceryLength = groceries.length;

  for (let i = 0; i < groceryLength; i++) {
    const randomIndex = Math.floor(Math.random() * groceries.length);
    console.log(randomIndex);
    const removedItem = groceries.splice(randomIndex, 1)[0];

    yield removedItem;
  }
};

const randomNumberGenerator = getRandomNumber();
const groceryListGenerator = groceryList();

for (let i = 0; i < 5; i++) {
  const random = randomNumberGenerator.next().value;
  const grocery = groceryListGenerator.next().value;

  console.log(`Random Number: ${random} and Grocery: ${grocery}`);
}
