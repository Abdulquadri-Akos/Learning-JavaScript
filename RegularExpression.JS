// // const sentence = "There once was a monkey who knew Javascript....";

// // const patterns = /Java[s]cript/;

// // // We can test and match

// // const test = patterns.test(sentence);
// // console.log(test);

// // const match = sentence.match(patterns);
// // console.log(match);

// const sentence = "There once there was a1 munkey who knew Javascript....";

// const patterns = /wAs/gi;

// // We can test and match

// const test = patterns.test(sentence);
// console.log(test);

// const match = sentence.match(patterns);
// console.log(match);

// const getThere = /...$/

// const thereResult = getThere.test(sentence)
// console.log(thereResult)

// const getMatch = sentence.match(getThere)
// console.log(getMatch)

// const email = "monkey@trees.com";

// const emailPattern = /.com$/;

// console.log(emailPattern.test(email));

// const test = email.match(emailPattern);
// console.log(test);

const email = "monkey@trees.com";

const emailPattern = /\w*@\w*\.com$/;

console.log(emailPattern.test(email));

const test = email.match(emailPattern);
console.log(test);


const phoneNumber = "My number is 020-382-6940"

const phonePattern = /\d{3}-\d{3}-\d{4}/

console.log(phonePattern.test(phoneNumber))    

const testPhone = phoneNumber.match(phonePattern);
console.log(testPhone)