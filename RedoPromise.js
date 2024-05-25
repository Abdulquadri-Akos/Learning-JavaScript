// console.log("Program Started");
// //Initially the promise is pending
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve();
//   }, 3000);
// });

// console.log(myPromise);
// console.log("program in progress.");

// myPromise.then(() => {
//   console.log("Program Completed");
// });

// console.log("Program Started");

// const doPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve();
//   }, 3000);
//   setTimeout(() => {
//     reject();
//   }, 2000);
// });

// console.log(doPromise);
// console.log("Promise in progress....");
// doPromise
//   .then(() => {
//     console.log("Program Completed");
//   })
//   .catch(() => {
//     console.log("Program Failed");
//   });

// console.log("Program Started");

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve();
//   }, 3000);
// });

// console.log(myPromise);
// console.log("Promise in progress....");

// myPromise.then(() => {
//   console.log("Step 1 completed");

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, 3000);
//   }).then(() => {
//     console.log("Step 2 completed");
//   });
// });

// console.log("Program Started");
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ data: "Hello, friend!", error: null });
//   }, 3000);
// });

// // When promise is pending
// console.log(myPromise);

// // When promise is in progress
// console.log("Promise in progress...");

// myPromise
//   .then((value) => {
//     console.log(value);

//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("First promise chain complete!");
//       }, 2000);
//     });
//   })
//   .then((value) => {
//     console.log(value);
//   });

// myPromise.then((value) => {
//   console.log(value);

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Second promise chain complete!");
//     }, 10000);
//   }).then((value) => {
//     console.log(value);
//   });
// });

console.log("Program Started");

const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3000);
});

// myPromise1.then((value) => {
//   console.log(value);
// });

const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 5000);
});

// myPromise2.then((value) => {
//   console.log(value);
// });

Promise.all([myPromise1, myPromise2]).then((value) => {
  //Array index
  const firstPromise = value[0];
  const secondPromise = value[1];
  const result = firstPromise + secondPromise;
  console.log(result);

  const getResultUsingReduce = value.reduce((prev, curr) => {
    return prev + curr;
  }, 0);

  console.log(getResultUsingReduce);
});
