const happy = false;

happy === true ? console.log("Yay!") : console.log("Nope!");

// Using a  function Declaration and IF Statement

// function happyCheck(happy) {
//   if (happy === true) {
//     console.log("Yay!");
//   } else {
//     console.log("Nope!");
//   }
// }

// happyCheck(true);

// Using Arrow Function and Ternary Operators

const happyCheck = (happy) => {
  happy === true ? console.log("Yay!") : console.log("Nope!");
};

happyCheck(true);

const numbers = [5, 10, 15, 20, 25];
const overUnder = numbers.map((num) => {
  return num > 10 ? "Over" : "Under";
});

overUnder;

const hungry = true;

if (hungry === true) {
  console.log("Have a cookies!");
} else {
  console.log("No cookies for you!");
}

//Using Ternary Operator
hungry === true
  ? console.log("Have a cookies!")
  : console.log("No cookies for you!");

// const over9000 = (number) => {
//     if(number > 9000){
//         return "It's over 9000!!!"
//     }else {
//         return "Taking a Nappa...."
//     }

// }

const over9000 = (number) => {
  return number > 9000 ? "It's over 9000!!!" : "Taking a Nappa....";
};
const result = over9000(20000);
console.log(result);

const wizards = [
  "Gannnnndalf",
  "Voldemort",
  "Harry",
  "Jafar",
  "Saruman",
  "Merlin",
];

const wizardMap = wizards.map((eachWizard) => {
  console.log(eachWizard);

  if (eachWizard.includes("n")) {
    return eachWizard.replaceAll("n", "*");
  } else {
    return eachWizard.toUpperCase();
  }
});

// const wizardMap = wizards.map((eachWizard) => {
//   console.log(eachWizard);

//   return eachWizard.includes("n") ? eachWizard.replace("n", "*") : eachWizard;
// });

console.log(wizardMap);

const characters = [
  "Han Solo",
  "Spock",
  "Darth Vader",
  "Yoda",
  "Neo",
  "Sarah Connor",
];

const filterSpace = characters.filter((character) => {
  if (character.includes(" ")) {
    return true;
  } else {
    return false;
  }
});

console.log(filterSpace)
