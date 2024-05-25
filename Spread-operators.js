//Array Spread

const array = [10, 20, 30, 40, 50];

let arrayCopy = [];

console.log(array);

// USING SPREAD OPERATOR TO COPY ARRAY

arrayCopy = [...array];

// USING FOR OF LOOP

// for (const value of array) {
//   arrayCopy.push(value);
// }

arrayCopy.push(60);

// USING FOR EACH LOOP
// for (let i = 0; i < array.length; i++) {
//   arrayCopy.push(array[i]);
// }

console.log(arrayCopy);

// String Spread

const name = "Abdulquadri";

const nameSpread = ["!", ...name, "!"];

nameSpread;

//Set spread
const mySet = new Set();

mySet.add("Batman");
mySet.add("Robin");
mySet.add("Spiderman");
mySet.add("Batman"); // This will be ignore because Set don't allow duplicate values

const copySet = [...mySet, "Batman"];

copySet;

// Map Spread
const stock = new Map();
stock.set("Apple", 3);
stock.set("Mango", 20);
stock.set("Bananas", 7);

const stockArray = [...stock];

console.log(stockArray);

const country = {
  Germany: 3,
  Brazil: 212,
  Egypt: 102,
};

country;

const countryPopExtended = {
  ...country,
  Indonesia: 273,
  Japan: 125,
  Germany: 1,
};

countryPopExtended;

const countryPop = {
  Germnay: 83,
  Brazil: 212,
  Eygpt: 102,
  Canada: {
    pop: 38,
  },
};

countryPop;

const copyCountryPop = { ...countryPop };

countryPop.Canada.capital = "Ottawa";

countryPop;

console.log(copyCountryPop.Canada);

const points = [10, 15, 20, 30, 5];

points;

const copyPoints = [...points, 50, 75];

copyPoints;

const views = [
  [5, 10, 20],
  [10, 20, 30],
];

console.log(views);

const viewCopys = [...views];

viewCopys[1].push(40);

console.log(viewCopys);

viewCopys[0].pop();

console.log(viewCopys);

viewCopys.push([100, 200]);

console.log(viewCopys);
console.log(views);

const animal = {
  name: "Kaola",
  kingdom: "Australia",
  cute: true,
  friend: [
    {
      name: "Monkey",
      kingdom: "Africa",
    },
  ],
};

const kaola = {
  ...animal,
  tail: true,
};

console.log(kaola);
console.log(animal);

console.log("-------------------");

animal.cute = false;

console.log(kaola);
console.log(animal);

console.log("-------------------");

animal.friend[0].cute = false;

console.log(kaola);
console.log(animal);

const superHero = {
  name: "Bruce Wayne",
  alias: "Batman",
  universe: "DC",
  happy: false,
  enemies: ["Joker", "Catwoman", "Bane"],
  bestMovies: {
    title: "The Dark Knight",
    rating: 95,
  },
};

const superHeroCopy = {
  ...superHero,
  enemies: [...superHero.enemies, "Poison Ivy"],
  bestMovies: { ...superHero.bestMovies, year: 2008 },
};

// superHeroCopy.enemies.push("Poison Ivy");
// superHeroCopy.bestMovies.year = 2008;

console.log(superHero);
console.log(superHeroCopy);
