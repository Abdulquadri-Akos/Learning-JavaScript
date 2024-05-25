// // const fetchPokeman = (ms) =>
// //   new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       resolve({ name: "Pickachu", power: 20 });
// //     }, ms);
// //   });

// const fetchPokeman = (ms) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("Danger, danger!"));
//     }, ms);
//   });

// console.log("Program starting...");

// const fetchPokemanData = async () => {
//   try {
//     const result = await fetchPokeman(2000);
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
//   console.log("there was an error, but we are okay!");
// };

// fetchPokemanData();

// console.log("Program complete!");

// const fetchUser = (ms) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ data: { user: "Monkey", admin: true } });
//     }, ms);
//   });
// };

// const login = (user) => {
//   if (user.admin === true) {
//     console.log("Successfully logged in!");
//   } else {
//     console.log("Failed to login, please try again");
//   }
// };

// console.log("program staring...");

// const getUser = async () => {
//   const result = await fetchUser(3000);
//   console.log(result);
//   login(result.data);
// };

// getUser();

const fetchFast = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Fast Done");
    }, 2000);
  });
};

// const fetchSlow = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Slow Done");
//     }, 6000);
//   });
// };
// console.log("program starting...");
// const firstTimeStamp = new Date();
// console.log(firstTimeStamp);

// const useFetch = async () => {
//   const fastResult = await fetchFast();
//   console.log(fastResult);

//   const slowResult = await fetchSlow();
//   console.log(slowResult);

//   const secondTimeStamp = new Date();
//   const elapsedTime = secondTimeStamp - firstTimeStamp;
//   console.log("program completed", elapsedTime);
// };

// console.log("program complete...");
// useFetch();

const goGetCandles = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ candy: "sour keys", quantity: 10 });
    }, 2000);
  });
};

const sellCandies = (candy) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(25 * candy.quantity);
    }, 3000);
  });
};

const firstDate = new Date();

// Using Vanilla promise to get the candies and sell them
const candy = goGetCandles();

candy.then((value) => {
  const sellValue = sellCandies(value);
  console.log(sellValue);
  sellValue.then((value) => {
    console.log(value);
  });
});

// Using FetchCandy function to get the candies and sell them

const fetchCandy = async () => {
  const result = await goGetCandles();
  console.log(result);
  const getSellCandies = await sellCandies(result);
  console.log(getSellCandies);

  const secondDate = new Date();
  const realDate = secondDate - firstDate;
  console.log(`The total time taken ${realDate}`);
};

fetchCandy();
