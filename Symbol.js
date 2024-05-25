const symbol = Symbol();
const mySymbolName = Symbol("Abdulquadri");

console.log(symbol, mySymbolName);
console.log(mySymbolName.description);

const characters = {
  name: "Rich Axley",
  class: "Axe Wielder",
  quote: "I'll never let you down",
  [Symbol("name")]: false,
  [4 + 5]: "age",
};

for (const character of Object.keys(characters)) {
  console.log(character);
}

console.log(Object.getOwnPropertySymbols(characters));

//Well Known Symbols
// Symbol.iterator
// Symbol.toasyncIterator
// Symbol.tostingTag

const details = {
  name: "Rich Axley",
  class: "Axe Wielder",
  quote: "I'll never let you down",
  [Symbol.iterator]: function* () {
    yield 1;
    yield [2, 3, 4, 5];
  },
};

for (const detail of Object.entries(details)) {
  console.log(detail);
}

for (const detail of details) {
  console.log(detail);
}

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

console.log(arr1 === arr2);

const baboon = Symbol("Monkey");
const gorilla = Symbol("Monkey");

console.log(typeof baboon);
console.log(typeof gorilla);
console.log(baboon.description);
console.log(gorilla.description);
console.log(baboon === gorilla);

const movie = {
  name: "Blade Runner",
  director: "Ridley Scott",
  year: 1982,
  rating: 89,
  genre: "Science Fiction",
  [Symbol("budget")]: 30,
  [Symbol("boxOffice")]: 41.6,
};

for (const [keys, value] of Object.entries(movie)) {
  console.log(`${keys} => ${value}`);
}

for (const value of Object.entries(movie)) {
  console.log(value);
  const getKeys = value[0];
  const getValues = value[1];

  console.log(`${getKeys} => ${getValues}`);
}

console.log(Object.getOwnPropertySymbols(movie));

// const books = {
//   name: "1984",
//   author: "George Orwell",
//   year: 1949,
//   rating: 4.6,
//   genre: "Science Fiction",
//   movie: true,
// };

// books[Symbol.iterator] = function* () {
//   const bookEntries = Object.entries(books);
//   for (const book of bookEntries) {
//     yield book;
//   }
// };

// for (const book of books) {
//   console.log(book);
// }

// Using Async Generator

const books = {
  name: "1984",
  author: "George Orwell",
  year: 1949,
  rating: 4.6,
  genre: "Science Fiction",
  movie: true,
};

books[Symbol.asyncIterator] = async function* () {
  const bookEntries = Object.entries(books);
  for (const book of bookEntries) {
    // yield new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(book);
    //   }, 1000);
    // });

    yield book;
  }
};

const getObject = async () => {
  for await (const book of books) {
    console.log(book);
  }
};

getObject();
