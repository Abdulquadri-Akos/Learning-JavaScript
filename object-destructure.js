const movie = {
  title: "Dune",
  year: "2021",
  length: 155,
  book: true,
};

const getTitle = movie.title;
console.log(getTitle);

// Using Destructuring

const { title, year, length, book } = movie;

console.log(title);

// Destructuring with Arrays inside function parameters
const studentDetails = ["001", "Akosile Abdulquadri", "Male"];

const showStudent = ([id, studentName, Gender]) => {
  console.log(
    `Student Id: ${id}, Student Name: ${studentName}, Gender: ${Gender}`
  );
};

showStudent(studentDetails);

const jungle = ["Monkey", "Lion", "Pando", "Rabbit", "Squirrel"];

const [, Lion, , Rabbit] = jungle;

console.log(Lion, Rabbit);

const snacks = {
  chips: { name: "Pringles", salty: true },
  candy: { name: "Twizzlers", salty: false },
  chocolate: { name: "Mars", salty: false },
};

const { name, salty } = snacks.candy;

console.log(name, salty);
7;

const { candy, fruit = { name: "Banana", salty: false } } = snacks;

console.log(fruit, candy);

