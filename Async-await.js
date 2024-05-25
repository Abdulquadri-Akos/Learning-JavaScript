// const makeTimeOut = (ms) => {
//   const timeout = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("All done!");
//     }, ms);
//   });

//   return timeout;
// };

// console.log("program starting...");

// makeTimeOut(1000).then((result) => {
//   console.log("from .then function", result);
// });
// console.log("program complete...");

// // Converting the Vanilla promises to Async and Await.
// const fetchStuff = async () => {
//   const result = await makeTimeOut(1000);
//   console.log("from async function", result);
// };

// fetchStuff();

// //Look how promises work in the async and await function.
// const makeTimeOut = (ms) => {
//   const timeout = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("All done!");
//     }, ms);
//   });

//   return timeout;
// };

// console.log("program started...."); // This code executes first.

// const fetchData = async () => {
//   console.log("Fetching first set of data...."); // This code executes second.
//   const result1 = await makeTimeOut(2000); // result1 pause
//   console.log("Fetching second set of data", result1); // Then get this result [The code executes forth]
//   const result2 = await makeTimeOut(2000); // result2 pause
//   console.log("Done fetching data", result2); // Then we get result2 as the last code that executes

//   const finalResult = await Promise.all([result1, result2]);
//   console.log("The Final Result", finalResult);
// };

// fetchData(); // This allow us to enter the async function.

// console.log("program complete..."); // This code executes third

// const fetchData = async () => {
//   return "Hello!";
// };

// const result = fetchData();
// console.log(result);

// result
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// const useHello = async () => {
//   const result = await fetchData();
//   console.log(result);
// };

// useHello();

// Using your try and catch block

const makeTimeOut = (ms) => {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("There was an error");
    }, ms);
  });

  return timeout;
};

const causeError = async () => {
  try {
    const result = await makeTimeOut(2000);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

console.log("program started");
causeError();
console.log("program ended...");
