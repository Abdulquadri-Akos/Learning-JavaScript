// const myMap = new Map();

// myMap.set("name", "John");
// myMap.set("age", 30);
// myMap.set("Gender", "Male");

// console.log(myMap);

// // Get Data
// const getAge = myMap.get("age");

// console.log(getAge);

// const checkMap = myMap.has("lowkey");
// console.log(checkMap);

// const checkMap2 = myMap.has("name");
// console.log(checkMap2);

// const checkMapSize = myMap.size;

// // Check the number of keys - value in the Object.
// console.log(checkMapSize);

// myMap.delete("Gender");

// myMap;
// checkMapSize;

// // const person = {
// //   name: "Super",
// // };

// // person;

// const mexico = new Map();

// mexico.set("id", 24);
// mexico.set("name", "Mexico");
// mexico.set("capital", "Mexico City");
// mexico.set("neighbour", ["USA", "Guatemala", "Belize"]);

// console.log(mexico);

// mexico.set("id", 25);

// console.log(mexico);

// mexico.get("neighbour").push("Hondorous");

// console.log(mexico);

const myPet = new Map();

myPet.set("name", "Sudo");
myPet.set("type", "Dog");
myPet.set("breed", "Foodies");
myPet.set("age", 7);
myPet.set("friend", ["Bit", "Byte", "Data"]);

console.log(myPet);

myPet.set("color", "Black");

myPet.set("breed", "Beagle");

console.log(myPet);

myPet.get("friend").pop("Data");
myPet.get("friend").push("Chip");

console.log(myPet);

const banana = new Map();
banana.set("name", "banana");
banana.set("quantity", 1);
banana.set("price", 1.95);

const apple = new Map();
apple.set("name", "apple");
apple.set("quantity", 1);
apple.set("price", 1.45);

const candy = new Map();
candy.set("name", "candy");
candy.set("quantity", 1);
candy.set("price", 3.5);

console.log(banana);
console.log(apple);
console.log(candy);

const store = new Map();
store.set("storeNumber", 5);
store.set("locationCity", "Milan");
store.set("locationCountry", "Italy");
store.set("products", [banana, apple, candy]);

console.log(store);

const getProducts = store.get("products");
console.log(getProducts);

for (let index = 0; index < store.get("products").length; index++) {
  const element = store.get("products")[index];
  console.log(element);
}

const getThirdProduct = store.get("products");
console.log(getProducts[2]);

console.log(getProducts[0].set("price", 1.75));
console.log(banana);
console.log(store);

const getCandyObject = candy.set("price", "4.99");
console.log(getCandyObject);

const houseForSales = new Map();
houseForSales.set("area", 940);
houseForSales.set("value", 320000);
houseForSales.set("streetName", "Fifth Street");
houseForSales.set("built", "2012");
houseForSales.set("owner", { name: "Blake", age: 29 });
houseForSales.set("offers", [290000, 295000, 315000, 312000]);

console.log(houseForSales);

houseForSales.delete("built");

console.log(houseForSales);

houseForSales.get("owner").age = 30;

console.log(houseForSales);

const offerPrice = houseForSales
  .get("offers")
  .reduce((prevOffers, currOffers) => {
    console.log(prevOffers, currOffers);
    if (currOffers < prevOffers) {
      return prevOffers;
    } else {
      return currOffers;
    }
  });

console.log(offerPrice);

houseForSales.set("Maximum Price", offerPrice);
houseForSales.set("salesPrice", 312000);

console.log(houseForSales);

// Creating my own console
const myConsole = new Map();

myConsole.set("key", (message) => {
  return console.log(message);
});

myConsole.get("key")("Hello World");
myConsole.set(1, "number one");
myConsole.set("1", "string two");
console.log(myConsole);

const numbers = [10, 20, 15, 30, 15, 20, 35, 60, 10];

const seenNumbers = new Map();

for (let index = 0; index < numbers.length; index++) {
  if (seenNumbers.has(numbers[index])) {
    console.log(index, seenNumbers.get(numbers[index]));
  } else {
    seenNumbers.set(numbers[index], index);
  }
}
console.log(seenNumbers);
