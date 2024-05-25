// To confirm your node if it's working
// Node Hello.js
console.log("Hello there");

//Keywords for Naming Variables in JavaScript are: Var & Const

// Var is used to declare a variable that can be reassigned
//::String

var name = "Super";
name = "Abdulquadri";
console.log(name);

// Const is used to declare a variable that cannot be reassigned
const constantName = "Super";
// constantName = "Abdulquadri"; - constantName cannot be reassigned
console.log(constantName);

//::Number
const age = 20;
let price = 1.23;
console.log(age);
console.log(price);

//::Boolean
const happy = true;
console.log(happy);
var sad = false;
console.log(sad);

//:: Null & Undefined
const empty = null;
console.log(empty);
const empty2 = undefined;
console.log(empty2);

// console.log(window.name);
// primitive data types
// String, number, boolean, null, undefined, Advanced data types [symbol, big Int]

let fname = "Abdulquadri";
let lname = "Akosile";

let fullName = fname + " " + lname;
// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());
// console.log(fullName.length);
// console.log(fullName[0]);
let fullName2 = `${fname} ${lname}`;
console.log(fullName2.slice(0, 11));

//BigInt = value(n)
var bigNumber = Number.MAX_VALUE;
var smallNumber = Number.MIN_VALUE;
console.log(BigInt(bigNumber) + BigInt(bigNumber));

const PI = 3.142;
console.log(PI)

const getThree = Math.trunc(PI)
console.log(getThree)