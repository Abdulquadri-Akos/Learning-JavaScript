// import printMonkey, { fullName } from "./Modules.js"; //es modules

// // //Node expect import to work like this const printMonkey = require("monkey.js") // common js. We are using node to run our code
// // const printMonkey = require("monkey.js");

// console.log(fullName.toUpperCase());

// for (let i = 0; i < fullName.length; i++) {
//   console.log(fullName[i]);
// }
// printMonkey();

import { monkeyResult, monkey } from "./Modules.js";

console.log(monkey);

// for (const aMonkey of Object.entries(monkey)) {
//   console.log(aMonkey);
// }

console.log(monkeyResult);
