// throw "Something bad just happened!";

//Any code after this throw won't be reachable.
//Exception Handling Flow. Try and Catch.

// try {
//   throw "boom!";
// } catch (error) {
//   console.error(error);
//   console.error("I got you, don't worry");
// }

// console.log("hi?");

// Trying data within the try block

// try {
//   const message = "Hello, friend!";
//   console.log(message);
//   throw "boom!";
// } catch (error) {
//   console.error(error);
//   console.error("I got you, don't worry");
// }

// console.log("hi?");

//Using throw new Error constructor
// try {
//   const message = "Hello, friend!";
//   console.log(message);
//   throw new Error("Boom!");
// } catch (error) {
//   console.error(error);
//   console.error("I got you, don't worry");
// }

// console.log("hi?");

// // never do this access try variable within catch block, but you can access the outer variable (outside the try scope itself)
// const message = "Hello, friend!";
// try {
//   console.log(message);
//   throw "boom!";
// } catch (error) {
//   console.error(error);
//   console.error("I got you, don't worry");
//   console.log(message);
// }
// console.log("hi?");

// console.log("Program Started");
// throw new Error( "Uh, Oh!" );
// console.log("Program Ended");

// console.log("Program Started");
// try {
//   throw new Error("Uh, Oh!");
// } catch (error) {
//   console.error(error);
// }

// console.log("Program Ended");

// for (let index = 0; index <= 10; index++) {
//   const element = index;

//   console.log(`Loop ${element}`);

//   try {
//     if (element === 5) {
//       throw new Error(`Error on Loop ${element}`);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// try {
//   const user = {
//     name: "Misha",
//     age: 22,
//     setting: {
//       colour: "blue",
//     },
//   };
//   console.log("Creating User....");

//   console.log(user.profile.colour);

//   console.log("User Created!");
// } catch (error) {
//   console.error(error);
// }

// console.log("Program Ended");

let number = 1337;

try {
  let randomNumber = Math.floor(Math.random() * 1001); //From 0 - 1000
  console.log(randomNumber);
  number += randomNumber;
  console.log(number);

  if (number < 2000) {
    throw new Error("You lose!");
  } else {
    console.log(`You won with ${number}`);
  }
} catch (error) {
  console.error(error);
  console.error(`We lost with the number: ${number}`);
}
