const animal = {
  // { } - Object Literal, id - key, 42 - value
  id: 42,
  name: "rawr",
  type: "dog",
};

console.log(animal);

animal["name"] = "meow";

console.log(animal);

console.log(Object.keys(animal)); // Returns an array of keys
const getValues = Object.values(animal);

console.log(getValues);

console.log(Object.entries(animal)); // Returns an array of key-value pairs

console.log("name" in animal); // Works with object key

const mexico = {
  id: 24,
  name: "Mexico",
  capital: "Mexico City",
  neighbors: ["USA", "Guatemia", "Belize"],
};

console.log(mexico);

mexico["id"] = 25;

console.log(mexico);

mexico.neighbors.push["Hondures"];

console.log(mexico);

const banana = { name: "banana", quantity: 1, price: 1.95 };
const apple = { name: "apple", quantity: 1, price: 1.45 };
const candy = { name: "candy", quantity: 1, price: 3.5 };

const store = {
  storeNumber: 5,
  locationCity: "Milan",
  locationCountry: "Italy",
  product: [banana, apple, candy],
};

for (let index = 0; index < store.product.length; index++) {
  const element = store.product[index];
  console.log(element);
}

console.log(store);

console.log(store.product);
console.log(store.product[2]);

store.product[0].price = 1.75;
console.log(store.product);
console.log(store.product[0]);

store.product[2].price = 4.99;
console.log(store.product);
console.log(store.product[2]);

const houseForSales = {
  area: 940,
  value: 320000,
  streetName: "Fifth Street",
  built: "2012",
  owner: { name: "Blake", age: 29 },
  offers: [290000, 295000, 315000, 312000],
};

console.log(houseForSales);

delete houseForSales.built;

console.log(houseForSales);

houseForSales.owner.age = 30;

console.log(houseForSales);

const offerPrice = houseForSales.offers.reduce((prev, curr) => {
  console.log(prev, curr);
  if (prev < curr) {
    return curr;
  }

  return prev;
}, 0);

console.log(offerPrice);

houseForSales.salesPrice = 312000;

console.log(houseForSales);

// Building my console

const myConsole = {
  log: (message) => {
    console.log(message);
  },
};

myConsole.log("Hello World");
myConsole.log("Hello, Let Create Magics");

console.log(console);
