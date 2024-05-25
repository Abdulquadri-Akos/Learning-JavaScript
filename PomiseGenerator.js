const counter = async function* () {
  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });

  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  });
};

const count = counter();

// console.log(
//   count.next().value.then((res) => {
//     console.log("result", res);
//   })
// );
// const getObjects = async () => {
//   for (const promise of count) {
//     console.log(promise);
//     //   promise.then((res) => {
//     //     console.log("result", res);
//     //   });

//     const result = await promise;
//     console.log(result);
//   }
// };

// getObjects();

const countAsync = async () => {
  for await (const promise of count) {
    console.log(promise);
  }
};

countAsync();
