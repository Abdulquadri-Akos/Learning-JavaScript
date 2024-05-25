// // // // // // // // Short-circuiting
// // // // // // // // OR returns the first truthy value or the last one if no truthy value is found
// // // // // // // // let firstName = "Super";
// // // // // // // // let lastName = "Super";
// // // // // // // // let nickName = "";

// // // // // // // // // let result = firstName || lastName || nickName || "Anonymous";

// // // // // // // // let result = firstName && lastName && nickName && "Anonymous";

// // // // // // // // console.log(result);
// // // // // // // // true || alert("not printed");

// // // // // // // // // AND returns the first falsy value or the last one if no falsy value is found
// // // // // // // // let hour = 12;
// // // // // // // // let minutes = 30;

// // // // // // // // let getTrue = hour == 12 && minutes == 30;
// // // // // // // // console.log(getTrue);

// // // // // // // // let getFalse = hour == 12 && minutes == 31;
// // // // // // // // console.log(getFalse);

// // // // // // // // console.log(1 && 2 && 3);

// // // // // // // // let result3 = null || 2 || undefined;
// // // // // // // // result3;

// // // // // // // // !AND - inverse of AND

// // // // // // // // ?? - nullish coalescing operator :: return the first defined value

// // // // // // // // Created a program that asks for a role and password before you can successfully login
// // // // // // // // let jobRole = prompt("Who's there", "");

// // // // // // // // if (jobRole == "Admin") {
// // // // // // // //   let password = prompt("Password?", "");

// // // // // // // //   if (password == "TheMaster") {
// // // // // // // //     alert("Welcome");
// // // // // // // //   } else if ((password = "" || password == null)) {
// // // // // // // //     alert("Cancelled");
// // // // // // // //   } else {
// // // // // // // //     alert("Wrong password");
// // // // // // // //   }
// // // // // // // // } else if (jobRole == "" || jobRole == "null") {
// // // // // // // //   alert("Cancelled");
// // // // // // // // } else {
// // // // // // // //   alert("I don't know you");
// // // // // // // // }

// // // // // // // // loops
// // // // // // // // let num = 0;
// // // // // // // // while (num <= 3) {
// // // // // // // //   console.log(num);
// // // // // // // //   num++;
// // // // // // // // }

// // // // // // // // do while
// // // // // // // // let num2 = 2;
// // // // // // // // do {
// // // // // // // //   console.log(num2);
// // // // // // // // } while (num2 < 10);
// // // // // // // // {
// // // // // // // //   num2++;
// // // // // // // // }

// // // // // // // // // FOR LOOP
// // // // // // // // Inline;
// // // // // // // // for (let num = 0; num <= 10; num++) {
// // // // // // // //   console.log(num);
// // // // // // // // }

// // // // // // // // let num = 2;

// // // // // // // // for (num; num < 10; num++) {
// // // // // // // //   console.log(num); // 2, 3, 4, 5, 6, 7, 8, 9
// // // // // // // // }
// // // // // // // // console.log(num); // 10

// // // // // // // // Declare without calling the variable

// // // // // // // // let num2 = 0;
// // // // // // // // for (; num2 < 10; num2++) {
// // // // // // // //   console.log(num2);
// // // // // // // // }

// // // // // // // // The while example was replaced with for loop
// // // // // // // // let sum = 0;

// // // // // // // // for (sum == true; ; ) {
// // // // // // // //   let value = +prompt("Enter a number", "");
// // // // // // // //   if (!value) break;

// // // // // // // //   sum = sum + value;
// // // // // // // // }

// // // // // // // // console.log("The total sum is: " + sum);

// // // // // // // // Speaking about continue
// // // // // // // // let i = 0;

// // // // // // // // for (i; i < 10; i++) {
// // // // // // // //   if (i % 2 == 0) continue;

// // // // // // // //   console.log(i);
// // // // // // // // }

// // // // // // // // let i = -2;

// // // // // // // // i > 5 ? console.log("i is greater than 5") : console.log("i is less than 5"); // Ternary

// // // // // // // // Using Label Name
// // // // // // // // outer: for (let i = 0; i < 3; i++) {
// // // // // // // //   for (let j = 0; j < 3; j++) {
// // // // // // // //     let input = prompt(`Value at coords (${i},${j})`, "");

// // // // // // // //     // if an empty string or canceled, then break out of both loops
// // // // // // // //     if (!input) break outer; // (*)

// // // // // // // //     // do something with the value...
// // // // // // // //   }
// // // // // // // // }

// // // // // // // // console.log("The code is cancelled due to empty string / cancelled!");

// // // // // // // // for (let i = 2; i < 10; i++) {
// // // // // // // //   if (i % 2 == 0) continue;
// // // // // // // //   console.log(i);
// // // // // // // // }

// // // // // // // // Convert For Loop to While Loop
// // // // // // // // for (let i = 0; i < 3; i++) {
// // // // // // // //   // alert(`number ${i}!`);
// // // // // // // // }

// // // // // // // // let i = 0;
// // // // // // // // while (i < 3) {
// // // // // // // //   alert(`number ${i}!`);
// // // // // // // //   i++;
// // // // // // // // }

// // // // // // // // let num;

// // // // // // // // do {
// // // // // // // //   num = prompt("Enter a number greater than 100?", 0);
// // // // // // // //   if (num > 100) {
// // // // // // // //     alert("You have entered a number greater than 100");
// // // // // // // //   } else {
// // // // // // // //     alert("You have entered a number less than 100");
// // // // // // // //   }
// // // // // // // // } while (num <= 100 && num);

// // // // // // // // let n = 10;

// // // // // // // // nextPrime: for (let i = 0; i < n; i++) {
// // // // // // // //   for (let j = 2; j < i; j++) {
// // // // // // // //     if (i % j == 0) continue nextPrime;
// // // // // // // //   }

// // // // // // // //   console.log(i);
// // // // // // // // }

// // // // // // // // Convert switch to if statement

// // // // // // // // let browser = prompt("What browser are you using?", "");

// // // // // // // // if (browser == "Edge") {
// // // // // // // //   alert("You've got the Edge!");
// // // // // // // // } else if (
// // // // // // // //   browser == "Chrome" ||
// // // // // // // //   browser == "Firefox" ||
// // // // // // // //   browser == "Safari" ||
// // // // // // // //   browser == "Opera"
// // // // // // // // ) {
// // // // // // // //   alert("Okay we support these browsers too");
// // // // // // // // } else {
// // // // // // // //   alert("We hope that this page looks ok!");
// // // // // // // // }

// // // // // // // // Convert if to switch statement

// // // // // // // // let browser = prompt("What browser are you using?", "");

// // // // // // // // switch (browser) {
// // // // // // // //   case "Edge":
// // // // // // // //     alert("You've got the Edge!");
// // // // // // // //     break;

// // // // // // // //   case "Chrome":
// // // // // // // //   case "Firefox":
// // // // // // // //   case "Safari":
// // // // // // // //   case "Opera":
// // // // // // // //     alert("Okay we support these browsers too");
// // // // // // // //     break;
// // // // // // // //   default:
// // // // // // // //     alert("We hope that this page looks ok!");
// // // // // // // // }

// // // // // // // // let a = +prompt("a?", "");

// // // // // // // // switch (a) {
// // // // // // // //   case 0:
// // // // // // // //     alert(0);
// // // // // // // //     break;

// // // // // // // //   case 1:
// // // // // // // //     alert(1);
// // // // // // // //     break;

// // // // // // // //   case 2:
// // // // // // // //   case 3:
// // // // // // // //     alert("2,3");
// // // // // // // //     break;

// // // // // // // //   default:
// // // // // // // //     alert("I don't know");
// // // // // // // // }

// // // // // // // // let userName = prompt("Enter your username", "");

// // // // // // // // function showWelcome() {
// // // // // // // //   // let message = "Welcome on board" + " " + userName;
// // // // // // // //   // alert(message);

// // // // // // // //   let message = `Welcome on board ${userName}`;
// // // // // // // //   alert(message);
// // // // // // // // }

// // // // // // // //FUNCTION
// // // // // // // // Local Variables - declared inside a function
// // // // // // // // Outer/Global Variables - declared outside a function

// // // // // // // // showWelcome();

// // // // // // // // let userName = "Super";

// // // // // // // // function showWelcome() {
// // // // // // // //   userName = "Abdulquadri";

// // // // // // // //   let message = "Welcome on board" + " " + userName;
// // // // // // // //   alert(message);
// // // // // // // // }

// // // // // // // // showWelcome();

// // // // // // // // let form = "Ann";
// // // // // // // // let text = "Hello";

// // // // // // // // function showMessage(form, text) {
// // // // // // // //   form = "*" + form + "*";

// // // // // // // //   let message = form + " : " + text;
// // // // // // // //   console.log(message);
// // // // // // // // }

// // // // // // // // showMessage(form, text);

// // // // // // // // function playBet9ja(age) {
// // // // // // // //   if (age >= 18) {
// // // // // // // //     return true;
// // // // // // // //   } else {
// // // // // // // //     return false;
// // // // // // // //   }
// // // // // // // // }

// // // // // // // // let age = prompt("Enter your age to check eligibility", 18);

// // // // // // // // if (playBet9ja(age)) {
// // // // // // // //   alert("You are eligible to play Bet9ja");
// // // // // // // // } else {
// // // // // // // //   alert("You are not eligible to play Bet9ja");
// // // // // // // // }

// // // // // // // // console.log(typeof playBet9ja);

// // // // // // // // function showAge(age) {
// // // // // // // //   if (age > 18) {
// // // // // // // //     return "You are eligible to play Bet9ja";
// // // // // // // //   } else {
// // // // // // // //     return "You are not eligible to play Bet9ja";
// // // // // // // //   }
// // // // // // // // }

// // // // // // // // console.log(showAge(12));

// // // // // // // // function showAge(age) {
// // // // // // // //   return age > 18
// // // // // // // //     ? "You are eligible to play bet9ja"
// // // // // // // //     : "You are not eligible to play bet9ja";
// // // // // // // // }

// // // // // // // // console.log(showAge(12));

// // // // // // // // function showLeastNumber(num1, num2) {
// // // // // // // //   if (num1 < num2) {
// // // // // // // //     return console.log(`${num1}`);
// // // // // // // //   } else {
// // // // // // // //     return console.log(`${num2}`);
// // // // // // // //   }
// // // // // // // // }

// // // // // // // // showLeastNumber(2, 5);

// // // // // // // // Using a ternary operation

// // // // // // // // function showLeastNumber(num1, num2) {
// // // // // // // //   return num1 < num2
// // // // // // // //     ? `The Less Value is: ${num1}`
// // // // // // // //     : `Seems this is higher ${num2}`;
// // // // // // // // }

// // // // // // // // console.log(showLeastNumber(2, 5));

// // // // // // // // function showPower(x, n) {
// // // // // // // //   return x ** n;
// // // // // // // // }

// // // // // // // // console.log(showPower(3, 3));

// // // // // // // //Create a webpage that prompt x ** n and return the result

// // // // // // // // let x = prompt("Enter your value for x", "");
// // // // // // // // let n = prompt("Enter your value for n", "");

// // // // // // // // function showPow(x, n) {
// // // // // // // //   let result = x;

// // // // // // // //   for (let i = 1; i < n; i++) {
// // // // // // // //     result *= x;
// // // // // // // //   }

// // // // // // // //   return result;
// // // // // // // // }

// // // // // // // // if (n < 1) {
// // // // // // // //   alert(`The ${n} value parsed is a wrong integer`);
// // // // // // // // } else {
// // // // // // // //   alert(showPow(x, n));
// // // // // // // // }

// // // // // // // // FUNCTION (parameters) calling to execute (argument)
// // // // // // // // calling a function to perform a specific action in a function (CALLBACK FUNCTION)

// // // // // // // // function ask(question, yes, no) {
// // // // // // // //   if (confirm(question)) {
// // // // // // // //     return yes();
// // // // // // // //   } else {
// // // // // // // //     return no();
// // // // // // // //   }
// // // // // // // // }

// // // // // // // // function showOk() {
// // // // // // // //   alert("You agreed");
// // // // // // // // }

// // // // // // // // function showCancel() {
// // // // // // // //   alert("You cancelled the execution");
// // // // // // // // }

// // // // // // // // ask("Do you agree?", showOk, showCancel);

// // // // // // // // function ask(question, yes, no) {
// // // // // // // //   if (confirm(question)) yes();
// // // // // // // //   else no();
// // // // // // // // }

// // // // // // // // function showOk() {
// // // // // // // //   alert("You agreed");
// // // // // // // // }

// // // // // // // // function showCancel() {
// // // // // // // //   alert("You cancelled the execution");
// // // // // // // // }

// // // // // // // // ask("Do you agree?", showOk, showCancel);

// // // // // // // // FUNCTION Using Arrow Function
// // // // // // // // let sum = (a, b) => a + b;
// // // // // // // // console.log(sum(2, 3));

// // // // // // // // let double = () => console.log(double());

// // // // // // // // let age = prompt("What is your age?", "");

// // // // // // // // let welcome = age < 18 ? () => alert("Hello") : () => alert("Greetings!");

// // // // // // // // console.log(welcome());

// // // // // // // // let ask = (question, yes, no) => (confirm(question) ? yes() : no());

// // // // // // // // // function ask(question, yes, no) {
// // // // // // // // //   if (confirm(question)) yes();
// // // // // // // // //   else no();
// // // // // // // // // }

// // // // // // // // // let showOk = () => alert("You agreed")
// // // // // // // // // let showCancelled = () =

// // // // // // // // ask(
// // // // // // // //   "Do you agree",
// // // // // // // //   () => alert("You agreed"),
// // // // // // // //   () => alert("You cancelled the execution")
// // // // // // // // );

// // // // // // // // Challenge 1:

// // // // // // // // function sumOfNumbersTo(destination) {
// // // // // // // //   let sum = 0;

// // // // // // // //   for (let i = 1; i <= destination; i++) {
// // // // // // // //     //console.log(i);

// // // // // // // //     sum += i;
// // // // // // // //     console.log(sum);
// // // // // // // //   }

// // // // // // // //   return `The total sum of the destination ${sum}`;
// // // // // // // // }

// // // // // // // // console.log(sumOfNumbersTo(20));

// // // // // // // // // Challenge 2:

// // // // // // // function countEvenNumbersWithin(destination) {
// // // // // // //   let sum = 0;
// // // // // // //   let count = 0;
// // // // // // //   let arrayOfEvenNumbers = [];

// // // // // // //   for (let i = 1; i <= 10; i++) {
// // // // // // //     if (i % 2 == 0) {
// // // // // // //       sum += i;
// // // // // // //       console.log(i);
// // // // // // //       count++;
// // // // // // //       arrayOfEvenNumbers.push(i);
// // // // // // //       // console.log(arrayOfEvenNumbers);
// // // // // // //     }
// // // // // // //   }

// // // // // // //   return {
// // // // // // //     // "Total sum of even numbers": sum,
// // // // // // //     // "Total count of even numbers": count,
// // // // // // //     // "Array numbers of event": arrayOfEvenNumbers,

// // // // // // //     sum,
// // // // // // //     count,
// // // // // // //     arrayOfEvenNumbers,
// // // // // // //   };
// // // // // // // }

// // // // // // // console.log(countEvenNumbersWithin(10));

// // // // // // // // Challenge 3:
// // // // // // // // function celsiusToFahrenheit(arrayOfNumbers) {
// // // // // // // //   let fahrenheit = [];

// // // // // // // //   for (let i = 0; i < arrayOfNumbers.length; i++) {
// // // // // // // //     fahrenheit.push(Math.trunc((arrayOfNumbers[i] * 9) / 5 + 32));
// // // // // // // //   }

// // // // // // // //   return fahrenheit;
// // // // // // // // }

// // // // // // // // console.log(celsiusToFahrenheit([10.1, 19.4, 30, 40, 50, 60, 70, 80, 90, 100]));

// // // // // // // // function sumOfNumbersTo(destination) {
// // // // // // // //   let sum = 0;

// // // // // // // //   for (let i = 1; i <= destination; i++) {
// // // // // // // //     sum += i;

// // // // // // // //     // sum = sum + i
// // // // // // // //   }

// // // // // // // //   return sum;
// // // // // // // // }

// // // // // // // // console.log(sumOfNumbersTo(30));

// // // // // // // /**
// // // // // // //  * Challenge -  1
// // // // // // //  *
// // // // // // //  * Calculate and return the sum of the numbers between 1 and a destination.
// // // // // // //  *
// // // // // // //  * between 1 and destination (inclusive)
// // // // // // //  * (1 to destination) where destination is a number greater than 1 and destination is included when calculating the sum.
// // // // // // //  *
// // // // // // //  * If you did Challenge - 1, remove the comment in the line just after this function
// // // // // // //  *
// // // // // // //  **/

// // // // // // // function sumOfNumbersTo(destination) {
// // // // // // //   // sumofNumbersTo = function || destination - parameter back inside the function

// // // // // // //   let sum = 0; // sum, that's the value that will be returned at the end of the function

// // // // // // //   //for(declare a variable, condition, increment/decrement)
// // // // // // //   //start from 1 - destination

// // // // // // //   for (let i = 1; i <= 10; i++) {
// // // // // // //     console.log(i);

// // // // // // //     sum += i;
// // // // // // //   }

// // // // // // //   return sum;
// // // // // // // }

// // // // // // // // Out of a function

// // // // // // // // let sum = 0;

// // // // // // // // for(let i = 1; i <= 10; i++){
// // // // // // // //   console.log(i)

// // // // // // // //   sum = sum + i;
// // // // // // // //   console.log(sum)
// // // // // // // // }

// // // // // // // // assignment.sumOfNumbersTo = sumOfNumbersTo;

// // // // // // // / * Challenge -  1
// // // // // // //  *
// // // // // // //  * Calculate and return the sum of the numbers between 1 and a destination.
// // // // // // //  * (1 to destination) where destination is a number greater than 1 and destination is included when calculating the sum.
// // // // // // //  *
// // // // // // //  * If you did Challenge - 1, remove the comment in the line just after this function

// // // // // // // Our number should between 1 and destination (unknown / inclusive value)
// // // // // // // our destination should greater than one and he said we should include the sum
// // // // // // // destination 1 || summation 1 + 1 = 2
// // // // // // //  * */

// // // // // // function sumOfNumbersTo(destination) {
// // // // // //   let sum = 0;

// // // // // //   // for (declare a variable, condition, increment / decrement)
// // // // // // }

// // // // // // // sum 1 + 0 = 1

// // // // // // let sum = 0;

// // // // // // for (let i = 1; i <= 10; i++) {
// // // // // //   console.log(i);

// // // // // //   sum = sum + i;
// // // // // //   console.log(sum);
// // // // // // }

// // // // // // // return summation of value between 1 and destination

// // // // // // const obj = {
// // // // // //   value: 42,
// // // // // //   getValue: function () {
// // // // // //     return this.value;
// // // // // //   },
// // // // // // };

// // // // // // // console.log(obj.getValue());

// // // // // // let age = 16; // take 16 as an example

// // // // // // if (age < 18) {
// // // // // //   // welcome(); // \   (runs)
// // // // // //   //  |
// // // // // //   function welcome() {
// // // // // //     //  |
// // // // // //     console.log("Hello!"); //  |  Function Declaration is available
// // // // // //     // welcome()
// // // // // //   } //  |  everywhere in the block where it's declared
// // // // // //   //  |
// // // // // //   // welcome(); // /   (runs)
// // // // // // } else {
// // // // // //   function welcome() {
// // // // // //     console.log("Greetings!");
// // // // // //   }
// // // // // // }

// // // // // // // Here we're out of curly braces,
// // // // // // // so we can not see Function Declarations made inside of them.

// // // // // // welcome();

// // // // // // error!

// // // // // sayHi("John");

// // // // // function sayHi(name) {
// // // // //   // (*) no magic any more
// // // // //   console.log(`Hello, ${name}`);
// // // // // }

// // // // // // Arrow Function declare variable = (parameter) => {run your code, return}
// // // // // // let func = (a,b) => {
// // // // // //   return a + b;
// // // // // // }

// // // // // let func = (a, b) => a + b;

// // // // // console.log(func(2, 10));

// // // // // let sayHi2 = () => {
// // // // //   console.log('Hello!')
// // // // // }

// // // // // sayHi2();

// // // // function pow(x, n) {
// // // //   let result = 1;

// // // //   for (let i = 0; i < n; i++) {
// // // //     result *= x;
// // // //   }

// // // //   return result;
// // // // }

// // // // let x = prompt("x?", "");
// // // // let n = prompt("n?", "");

// // // // if (n <= 0) {
// // // //   alert(
// // // //     `Power ${n} is not supported, please enter an integer number greater than zero`
// // // //   );
// // // // } else {
// // // //   alert(pow(x, n));
// // // // }

// // // // let user = {
// // // //   name: "John",
// // // //   age: 30,
// // // // };

// // // // user.isAdmin = true;
// // // // delete user.name;
// // // // let user_constructor = new Object();

// // // // console.log(
// // // //   `Client Name: ${user.name} and Age: ${user.age}, The user is an Admin? ${user.isAdmin}`
// // // // );
// // // // console.log(typeof user.isAdmin);
// // // // console.log(typeof user_constructor);

// // // // let birth = {};

// // // // let myBird = "Eagle";

// // // // birth[myBird] = true;
// // // // // birth["liked bird"] = true;

// // // // birth;

// // // // function makeUser(name, age) {
// // // //   return {
// // // //     name,
// // // //     age,
// // // //   };
// // // // }

// // // // let user = makeUser("John", 30);

// // // // console.log(user.name + " " + user.age);

// // // // let object = {
// // // //   for: 1,
// // // //   let: 2,
// // // //   return: 3,
// // // // };

// // // // console.log("for" in object);

// // // // console.log(object.for + object.let + object.return);
// // // // console.log(object);

// // // // // let user1 = {
// // // // //   age: undefined
// // // // // }

// // // // // let key = "age";

// // // // // console.log(key in user1)

// // // // // let person = {
// // // // //   surname: "Akosile",
// // // // //   firstname: "Abdulquadri",
// // // // //   middlename: "Oluwatosin",
// // // // // };

// // // // // // for (let key in person){
// // // // // //   console.log(key)
// // // // // //   console.log(person[key]);
// // // // // // }

// // // // // for (let prop in person) {
// // // // //   console.log(prop);
// // // // //   console.log(person[prop]);
// // // // // }

// // // // // let codes = {
// // // // //   "+49": "Germany",
// // // // //   "+41": "Switzerland",
// // // // //   "+44": "Great Britain",
// // // // //   // ..,
// // // // //   "+1": "USA",
// // // // // };

// // // // // for (let code in codes) {
// // // // //   console.log(codes[code]);
// // // // //   console.log(Number(code));
// // // // //   console.log(+code);
// // // // // }

// // // // // let symbol = {
// // // // //   "&": "ampersand",
// // // // //   $: "dollar",
// // // // //   "@": "at",
// // // // // };

// // // // // // delete symbol["$"];

// // // // // for (let key in symbol) {
// // // // //   console.log(key);
// // // // //   console.log(symbol[key]);
// // // // // }

// // // // // function sumOfNumbersTo(destination) {
// // // // //   let sum = 0;

// // // // //   for (let i = 1; i <= 20; i++) {
// // // // //     console.log(i);

// // // // //     sum = sum + i;
// // // // //     console.log(sum);
// // // // //   }

// // // // //   return;
// // // // // }

// // // // // console.log(sumOfNumbersTo(10));

// // // // // let boy = {}

// // // // // boy.gender = "male"

// // // // // console.log(boy)
// // // // // console.log(typeof boy)

// // // // // for (let i = 1; i < 5; i++){
// // // // //   if(i === 3)continue;
// // // // //   console.log(i)
// // // // // }

// // // // let user = {};

// // // // user.name = "John";
// // // // user.surname = "Smith";

// // // // user.name = "Pete";

// // // // delete user.name;

// // // // console.log(user);

// // // // let schedule = {};
// // // // // schedule.time = "9:30";
// // // // schedule;

// // // // console.log(isEmpty(schedule)); // true

// // // // schedule["8:30"] = "get up";
// // // // schedule;

// // // // console.log(isEmpty(schedule)); // false

// // // // function isEmpty(obj) {
// // // //   for (let key in obj) {
// // // //     return false;
// // // //   }
// // // //   return true;
// // // // }

// // // // let salaries = {
// // // //   John: 100,
// // // //   Ann: 160,
// // // //   Pete: 130,
// // // // };

// // // // let sum = 0;

// // // // for (let key in salaries) {
// // // //   console.log(salaries[key]);
// // // //   sum += salaries[key];
// // // // }

// // // // console.log(sum);

// // // // let menu = {
// // // //   width: 200,
// // // //   height: 300,
// // // //   title: "My menu",
// // // // };

// // // // for (let key in menu) {
// // // //   console.log(key);
// // // //   console.log(menu[key]);
// // // // }

// // // // function multiplyNumeric(obj) {
// // // //   for (let key in obj) {
// // // //     if (typeof obj[key] == "number") {
// // // //       obj[key] *= 2;
// // // //       console.log(obj[key]);
// // // //     }
// // // //   }
// // // // }

// // // // multiplyNumeric(menu);

// // // // // let a = {}
// // // // // let b = a
// // // // // console.log(a == b)
// // // // // console.log(typeof a)

// // // // let a = {}
// // // // let b = {}
// // // // console.log(a == b)

// // // // let user = {
// // // //   name: 'John',
// // // //   age: 20
// // // // }

// // // // console.log(user.name)

// // // // Cloning Object
// // // // for (let key in user){
// // // //   console.log(user)
// // // //   console.log(user[key])
// // // // }

// // // // let clone = {}
// // // // console.log(typeof clone)
// // // // console.log(clone.name)

// // // // for(let key in user){
// // // //   clone[key] = user[key]
// // // //   console.log(clone[key])
// // // // }

// // // // console.log(clone.name)
// // // // clone.name = 'Super'
// // // // console.log(user.name);
// // // // console.log(clone.name)

// // // // Using Object.assign

// // // // let user = { name: "Super" };
// // // // let permission1 = { canView: true };
// // // // let permission2 = { canEdit: false };

// // // // let result = Object.assign(user, permission1, permission2);

// // // // console.log(result);

// // // // let result2 = Object.assign(
// // // //   user,
// // // //   { name: "Abdulquadri" },
// // // //   permission1,
// // // //   permission2
// // // // );

// // // // console.log(result2);

// // // // let anotherUser = Object.assign({}, user);

// // // // // console.log(anotherUser);

// // // // // console.log(anotherUser.name);

// // // // // Nesting Object

// // // // // let user = {
// // // // //   name: "John",
// // // // //   sizes: {
// // // // //     height: 182,
// // // // //     width: 50,
// // // // //   },
// // // // // };

// // // // // let clone = Object.assign({}, user);
// // // // // console.log(clone);
// // // // // for (key in user) {
// // // // //   console.log(key);
// // // // //   console.log(user[key]);
// // // // //   console.log(clone[key]);
// // // // // }

// // // // // console.log(clone.name);

// // // // // let result = clone.name === user.name;
// // // // // result;

// // // // // console.log(user.sizes.width);

// // // // // Structured Clone
// // // // // let user = {
// // // // //   name: "John",
// // // // //   sizes: {
// // // // //     height: 182,
// // // // //     width: 50,
// // // // //   },
// // // // // };

// // // // // console.log(user.sizes.width);
// // // // // user.sizes.width = 60;
// // // // // console.log(user.sizes.width);

// // // // // let clone = structuredClone(user);
// // // // // clone.sizes.width = 80;

// // // // // console.log(clone.sizes.width);
// // // // // console.log(user.sizes.width);

// // // // let user1 = {};
// // // // user1.me = user1;
// // // // console.log(user1);

// // // // let clone1 = structuredClone(user1);
// // // // console.log(clone1);

// // // // let result = clone1.me == clone1;
// // // // let result2 = user1.me == clone1.me;
// // // // console.log(result2);
// // // // console.log(result);

// // // // function marry(man, woman) {
// // // //   woman.husband = man;
// // // //   man.wife = woman;

// // // //   return {
// // // //     father: man,
// // // //     mother: woman,
// // // //   };
// // // // }

// // // // let family = marry(
// // // //   {
// // // //     name: "John",
// // // //   },
// // // //   { name: "Ann" }
// // // // );

// // // // console.log(family);

// // // // delete family.father;
// // // // delete family.mother.husband;

// // // // console.log(family);

// // // //Objects are usually created to represent entities of the real world, like users, orders and so on:
// // // // Function Actions are represented in JavaScript by functions in properties.

// // // // let user = {
// // // //   name: "John",
// // // //   age: 30,
// // // // };

// // // // user.SayHi = function () {
// // // //   console.log("Hello!");
// // // // };

// // // // function sayHi() {
// // // //   console.log("Hello!");
// // // // }

// // // // user.sayHi = sayHi;

// // // // user.SayHi();

// // // // Shorter Method

// // // // let user = {
// // // //   sayHi: function(){
// // // //     console.log('Hello World!')
// // // //   }
// // // // }

// // // // let user = {
// // // //  sayHi(){
// // // //   console.log('Hello World!')
// // // //  }
// // // // }
// // // // for (let key in user){
// // // //   console.log(key)
// // // //   console.log(user[key])
// // // // }

// // // // user.sayHi()

// // // // let user = {
// // // //   // name: 'Abdulquadri Akosile',
// // // //   firstName: "Abdulquadri",
// // // //   lastName: "Akosile",
// // // //   age: 20,

// // // //   sayHi() {
// // // //     console.log(`Welcome, ${this.firstName} ${this.lastName}!`);
// // // //   },
// // // // };

// // // // let admin = user;
// // // // user = null;

// // // // admin.sayHi();

// // // // Super Spaghetti Code
// // // // let calculator = {
// // // //   a: Number(prompt("Enter your a value?", "0")),
// // // //   b: Number(prompt("Enter your b value?", "0")),

// // // //   read() {
// // // //     this.a, this.b;
// // // //   },

// // // //   sum() {
// // // //     let sumResult = this.a + this.b;
// // // //     alert(sumResult);
// // // //   },

// // // //   mil() {
// // // //     let milResult = this.a * this.b;
// // // //     alert(milResult);
// // // //   },
// // // // };

// // // // Corrected Code
// // // let calculator = {
// // //   read() {
// // //     this.a = +prompt("a?", 0);
// // //     this.b = +prompt("b?", 0);
// // //   },

// // //   sum() {
// // //     return this.a + this.b;
// // //   },

// // //   mil() {
// // //     return this.a * this.b;
// // //   },
// // // };

// // // // calculator.read();
// // // // alert(calculator.sum());
// // // // alert(calculator.mil());

// // // // calculator.read();
// // // // calculator.sum();
// // // // calculator.mil();

// // // // let calculate = {
// // // //   a: 10,
// // // //   b: 20,

// // // //   read() {
// // // // //     prompt("Enter your first value", "");
// // // // //     prompt("Enter your second value", "");
// // // // //   },
// // // // //   sum() {
// // // // //     console.log(this.a + this.b);
// // // // //   },

// // // // //   mul() {
// // // // //     console.log(this.a * this.b);
// // // // //   },
// // // // // };

// // // // // console.log(calculate.sum());
// // // // // console.log(calculate.mul());
// // // // let ladder = {
// // // //   step: 0,
// // // //   up() {
// // // //     return this.step++;
// // // //   },
// // // //   down() {
// // // //     return this.step--;
// // // //   },
// // // //   showStep: function () {
// // // //     console.log(this.step);
// // // //   },
// // // // };

// // // // console.log(ladder.up());
// // // // console.log(ladder.up());
// // // // console.log(ladder.up());
// // // // console.log(ladder.down());
// // // // console.log(ladder.down());
// // // // console.log(ladder.showStep());

// // // // function User(name) {
// // // //   this.name = name;
// // // //   this.isAdmin = false;
// // // // }

// // // // let user1 = new User("Jack");
// // // // let user2 = new User("Super");

// // // // console.log(user1.name);
// // // // console.log(user2.isAdmin);

// // // // function User(name) {
// // // //   this.name = name;
// // // //   this.sayHi = function () {
// // // //     console.log("My name is " + this.name);
// // // //   };
// // // // }

// // // // let user = new User("John");
// // // // let user2 = new User("Super");

// // // // user.sayHi();
// // // // user2.sayHi();

// // // function Calculator() {
// // //   this.read = function () {
// // //     this.a = +prompt("Enter digit for a", "0");
// // //     this.b = +prompt("Enter digit for b", "0");
// // //   };

// // //   this.sum = function () {
// // //     return this.a + this.b;
// // //   };

// // //   this.mul = function () {
// // //     return this.a * this.b;
// // //   };
// // // }

// // // let calculator1 = new Calculator();
// // // calculator1.read();

// // // alert("Sum=" + calculator1.sum());
// // // alert("Mul=" + calculator1.mul());

// // // function Accumulator(startingValue) {
// // //   this.value = startingValue;

// // //   this.read = function () {
// // //     this.value += +prompt("Enter a number", "0");
// // //   };
// // // }

// // // let accumulator = new Accumulator(1);

// // // accumulator.read();

// // // // alert(accumulator.value);

// // // let user = null;

// // // // user.address = "Akosile Estate";

// // // // console.log(user);

// // // alert(user?.address);
// // // alert(user?.address.street);

// // // let userAdmin = {
// // //   admin() {
// // //     alert("I am admin");
// // //   },
// // // };

// // // let userGuest = {};

// // // userAdmin.admin?.();
// // // userGuest.admin?.();

// // let key = "firstName";

// // let user1 = {
// //   firstName: "John",
// // };

// // for (let key in user1) {
// //   console.log(user1);
// //   console.log(user1[key]);
// // }

// // delete user1?.firstName;
// // user1.firstName = "Abdulquadri";

// // let user2 = null;

// // console.log(user1?.[key]);
// // console.log(user2?.[key]);

// // function createCounter(){
// //   let counter = 10;

// //   return function () {
// //     counter++;
// //     return counter;
// //   };
// // }
// // const counter = createCounter();
// // console.log(counter());

// function createCounter(counter) {

//   return {
//     increment() {
//       counter++;
//       console.log(counter);
//       return counter;
//     },

//     reset() {
//       counter;
//       return counter;
//     },

//     decrement() {
//       return --counter;
//     },
//   };
// }

// const counter = createCounter(20);
// console.log(counter.increment());
// console.log(counter.decrement());
// console.log(counter.reset());

// // const numbers = [1, 4, 9];
// // undefined
// // numbers

// // const root = numbers.map((num) => (Math.sqrt(num)))
// // undefined
// // root
// // (3) [1, 2, 3]0: 11: 22: 3length: 3[[Prototype]]: Array(0)
// // const root = numbers.map((num) => (num % 2 == 0 ))
// // undefined
// // root
// // (3) [false, true, false]0: false1: true2: falselength: 3[[Prototype]]: Array(0)

// var ourNumbers = [1, 4, 9];
// console.log(ourNumbers.length);

// function argumentLenght(...args){
//   console.log(args.length);
// }

// argumentLenght("John", "Doe");

const gitUrl = "https://api.github.com/users/Abdulquadri-Akos/repos";

async function fetchRepos() {
  const response = await fetch(gitUrl);
  const data = await response.json();

  console.log(data);

  var header = document.querySelector(".header");

  header.innerHTML = data.map((repo) => {
    return `
      <div class="repo">
        <h2>${repo.name}</h2>
        <p>${repo.description}</p>
        <a href="${repo.html_url}" target="_blank">View Repo</a>
      </div>
    `;
  });

  // document.querySelector(".header").innerHTML = data.map((repo) => {
  //   return `
  //     <div class="repo">
  //       <h2>${repo.name}</h2>
  //       <p>${repo.description}</p>
  //       <a href="${repo.html_url}" target="_blank">View Repo</a>
  //     </div>
  //   `;
  // });
}

fetchRepos();
