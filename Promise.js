// // // const myPromise = new Promise(function (resolve, reject) {
// // //   setTimeout(function () {
// // //     console.log("Hello my friend");
// // //   }, 1000);
// // // });

// // // console.log(myPromise);

// // //Arrow Function
// // // // () => {}

// // // const myPromise = new Promise((resolve, reject) => {
// // //   setTimeout(() => {
// // //     console.log("Hello my friend");
// // //     resolve("Here is your ice cream");
// // //     reject("Sorry, we are out of ice cream");
// // //   }, 1000);
// // // });

// // // When a promise is resolved, we get the result using .then while reject uses .catch
// // // Resolved Promise
// // // myPromise
// // //   .then((resolvedData) => {
// // //     console.log("seems the promise is resolved");
// // //     console.log(resolvedData);
// // //     console.log(myPromise);
// // //   })
// // //   .catch((error) => {
// // //     console.log("seems the promise is rejected");
// // //     console.log(error);
// // // //     console.log(myPromise);
// // // //   });

// // // // console.log(myPromise);
// // // // console.log("Hello Super, Learn Promise");

// // // // Promise Exercise
// // // // console.log("Program Started");

// // // // const doPromise = new Promise((resolve, reject) => {
// // // //   setTimeout(() => {
// // // //     console.log("Program in Progress");
// // // //     resolve("Program Completed");
// // // //   }, 3000);
// // // // });

// // // // doPromise.then((resolvedPromise) => {
// // // //   console.log(resolvedPromise);
// // // // });

// // // // console.log(doPromise);

// // // // console.log("Program Started");

// // // // const createPromise = new Promise((resolve, reject) => {
// // // //   setTimeout(() => {
// // // //     resolve();
// // // //   }, 3000);

// // // //   setTimeout(() => {
// // // //     console.log("Opps! Seems your promise failed....");
// // // //     reject();
// // // //   }, 2000);
// // // // });

// // // // createPromise
// // // //   .then((value) => {
// // // //     console.log("Program Completed");
// // // //   })
// // // //   .catch((error) => {
// // // //     console.log("Program Failure");
// // // //   });

// // // // console.log(createPromise);
// // // // console.log("Program in Progress....");

// // // console.log("Program Started");

// // // const doPromise = new Promise((resolve, reject) => {
// // //   setTimeout(() => {
// // //     console.log("Program in Progress");
// // //     resolve();
// // //   }, 3000);
// // // });

// // // doPromise.then(() => {
// // //   console.log("Step 1 Completed");

// // //   return new Promise((resolve, reject) => {
// // //     setTimeout(() => {
// // //       resolve("Step 2 Completed");
// // //     }, 3000);
// // //   }).then((value) => {
// // //     console.log(value);
// // //   });
// // // });

// // // console.log(doPromise);

// // // console.log("Program Started");

// // // const doPromise = new Promise((resolve, reject) => {
// // //   setTimeout(() => {
// // //     resolve({
// // //       data: "Hello, my friend!",
// // //       error: null,
// // //     });
// // //   }, 5000);
// // // });

// // console.log(doPromise);
// // console.log("Program in progress...");

// // //Both promises works in parallel
// // // My First Chain
// // doPromise.then((value) => {
// //   console.log(value);
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       resolve("First promise chain complete!");
// //     }, 2000);
// //   }).then((val) => {
// //     console.log(val);

// //     //Works this way fam!
// //     // return new Promise((resolve, reject) => {
// //     //   setTimeout(() => {
// //     //     resolve("Second promise chain complete");
// //     //   }, 10000);
// //     // }).then((val) => {
// //     //   console.log(val);
// //     // });
// //   });
// // });

// // // Second Chain
// // doPromise
// //   .then(() => {
// //     return new Promise((resolve, reject) => {
// //       setTimeout(() => {
// //         resolve("Second promise chain complete");
// //       }, 10000);
// //     });
// //   })
// //   .then((value) => {
// //     console.log(value);
// //   });

// // console.log("Program Started");

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 3000);
// }).then((val) => {
//   console.log(val);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(20);
//   }, 5000);
// }).then((val) => {
//   console.log(val);
// });

// Promise.all([promise1, promise2]).then((values) => {
//   const firstValue = values[0];
//   const secondValue = values[1];

//   const getResult = firstValue + secondValue;
//   console.log(getResult);
// });

// // // Using Array.reduce
// // // Promise.all([promise1, promise2]).then((values) => {
// // //   return values.reduce(reduceFunction);
// // // });

// // // function reduceFunction(prev, curr) {
// // //   console.log(prev + curr);
// // // }

// // // console.log(true && "orange");
// // // console.log(false || "orange");
// // // console.log(false ?? "orange");

// // //?? Return the first value except it is Null and Undefined

// // console.log(null ?? "yam");
// // console.log(false ?? "yam");
// // console.log(0 ?? "yamma");
// // // console.log("" ?? "orange");
// // console.log(undefined ?? "apple");
// // console.log("yamegg" ?? NaN);
