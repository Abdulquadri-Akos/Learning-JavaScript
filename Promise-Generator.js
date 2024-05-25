// // const asyncGenerator = async function* () {
// //   for (let i = 0; i < Infinity; i++) {
// //     //if you are using for loop. But for while loop you use first declare a  variable  while(true) {run your code here }
// //     yield new Promise((resolve, reject) => {
// //       setTimeout(() => {
// //         resolve(i);
// //       }, 1000);
// //     });

// //     yield "Next number";

// //     if (i === 1) {
// //       break;
// //     }
// //   }
// // };

// // console.log(asyncGenerator);

// // const asyncGeneratorObject = asyncGenerator();

// // console.log(asyncGeneratorObject);

// // const getAsyncGenerator = async () => {
// //   for await (const asyncGen of asyncGeneratorObject) {
// //     console.log(asyncGen);
// //   }
// // };

// // getAsyncGenerator();
// // console.log("Hello");

// // for(let num = 0; num < Infinity; num++) {
// //     console.log(num)
// // }

// // Do exercise

// // const asyncGeneratorExercise = async function* () {
// //   while (true) {
// //     yield new Promise((resolve, reject) => {
// //       setTimeout(() => {
// //         resolve(Math.floor(Math.random() * 10));
// //         //   resolve(Math.floor(Math.random() * (9 - 0) + 0));
// //       }, 1000);
// //     });
// //   }
// // };
// // console.log(asyncGeneratorExercise);

// // const randomNumber = asyncGeneratorExercise();

// // const getRandomNumber = async () => {
// //   for await (const random of randomNumber) {
// //     console.log(random);
// //   }
// // };

// // getRandomNumber();

// // const chancePromise = async function* () {
// //   while (true) {
// //     const randomNumber = Math.random();

// //     if (randomNumber > 0.5) {
// //       yield new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //           resolve("Fast");
// //         }, 500);
// //       });
// //     } else {
// //       yield new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //           resolve("Slow");
// //         }, 3000);
// //       });
// //     }
// //   }
// // };
// // console.log(chancePromise);
// // const chance = chancePromise();
// // console.log(chance);

// // const getChance = async () => {
// //   for await (const promise of chance) {
// //     console.log(promise);
// //   }
// // };

// // getChance();

// const sentenceGenerator = async function* (sentence) {
//   for (let i = 0; i < sentence.length; i++) {
//     yield new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (["a", "e", "i", "o", "u"].includes(sentence[i])) {
//           resolve("*");
//         } else {
//           resolve(sentence[i].toUpperCase());
//         }
//       }, 100);
//     });
//   }
// };

// const sentenceObject = sentenceGenerator("Monkey are the coolest animal!");

// const getLetter = async () => {
//   for await (const letter of sentenceObject) {
//     console.log(letter);
//   }
// };

// getLetter();

const timeGenerator = async function* (time) {
  var i = 0;
  while (true) {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(time);
      }, time);
    });

    time *= 2;
  }
};

const timeObject = timeGenerator(200);

const getTime = async () => {
  for await (const time of timeObject) {
    console.log(time);
  }
};

getTime();
