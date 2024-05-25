// // const monkey = {
// //   name: "Abu",
// //   species: "Capuchin",
// //   hobbies: ["stealing"],
// // };

// // const printMonkey = () => {
// //   console.log(monkey.name);
// // };

// // export { printMonkey as PM };

// export const fullName = "Abdulquadri Akosile"; //

// const monkey = {
//   name: "Abu",
//   species: "Capuchin",
//   hobbies: ["stealing"],
// };

// const printMonkey = () => {
//   console.log(monkey.name);
// };

// export default printMonkey;

const monkey = {
  name: "Abu",
  species: "Capuchin",
  hobbies: ["stealing"],
  age: 10,
};

const printMonkey = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(monkey);
    }, 2000);
  });
};

const monkeyResult = await printMonkey();

export { monkeyResult, monkey };
