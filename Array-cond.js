// for (let index = 0; index < numbers.length; index++) {
//   element = numbers[index] + element;
//   console.log(element);
// }

const numbers = [5, 10, 15, 20, 25, 30, 35];
var element = 0;

const numbersSum = numbers.reduce((prev, curr) => {
  console.log(prev, curr);
  if (curr < 20) {
    return prev + curr;
  }

  return prev;
}, 0);

console.log(numbersSum);

const cities = ["Valencia", "Madrid", "Barcelona", "Seville", "Bilbao"];

const concatCities = cities.reduce((previousIndex, currentIndex, index) => {
  console.log(previousIndex, currentIndex, index);
  //   if (currentIndex === "Bilbao") {
  //     return previousIndex;
  //   }

  if (index == 4) {
    return previousIndex + currentIndex;
  }

  return previousIndex + currentIndex + "-";
}, "");

console.log(concatCities);

const number = [5, 10, 15, 20, 25, 30, 35];

const reduce = number.reduce((prev, curr) => {
  console.log(prev, curr);
  prev.push(`Previous Results ${number}`);

  return prev;
}, []);

console.log(reduce);

const point = [55, 56, 57, 58, 59, 60];

const sum = point.reduce((prev, curr) => {
  console.log(prev, curr);
  return prev + curr;
}, 0);

console.log(point);
console.log(sum);

const companies = [
  "apple",
  "tesla",
  "spaceX",
  "amazon",
  "meta",
  "google",
  "facebook",
];

const modded = companies.reduce((prev, curr, index) => {
  console.log(prev, curr);
  if (curr.startsWith("a")) {
    return prev;
  }

  if (index == companies.length - 1) {
    return prev + curr;
  }

  return prev + curr + "-";
}, "");

console.log(modded);

const prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];

const afterTaxes = prices.reduce((prevIndex, currIndex) => {
  console.log(prevIndex, currIndex);
  if (currIndex > 6) {
    return prevIndex + currIndex;
  } else {
    return prevIndex + currIndex * 1.2;
  }
}, 0);

console.log(afterTaxes);
console.log(prices);

// const items = ["light", "banana", "phone", "book", "mouse"];

// const itemsMapped = items.map((item) => {
//   return item.toUpperCase();
// });

// const itemsReducer = itemsMapped.reduce((prev, curr) => {
//   return prev + " " + curr;
// });

// console.log(itemsReducer);
// console.log(items);
// console.log(itemsMapped);

const items = ["light", "banana", "phone", "book", "mouse"]
  .map((item) => {
    return item.toUpperCase();
  })
  .reduce((prev, curr) => {
    // return prev + " " + curr;

    return prev + curr + " ";
  }, "");

console.log(items);

// const theNumbers = [10, 20, 30, 40, 50];

// const numbersSquare = theNumbers.map((eachNumber) => {
//   return eachNumber ** 2;
// });

// const over1000 = numbersSquare.filter((takeNumber) => {
//   if (takeNumber > 1000) {
//     return takeNumber;
//   }
// });

// const over1000Reducer = over1000.reduce((prevNumber, currNumber) => {
//   return prevNumber + currNumber;
// });

// console.log(over1000Reducer);
// console.log(over1000);
// console.log(theNumbers);
// console.log(numbersSquare);

const theNumbers = [10, 30, 50, 70, 90]
  .map((eachNumber) => {
    return eachNumber ** 2;
  })
  .filter((takeNumber) => {
    if (takeNumber > 1000) {
      return true;
    } else {
      return false;
    }
  })
  .reduce((prevNumber, currNumber) => {
    return prevNumber + currNumber;
  }, 0);

console.log(theNumbers);
