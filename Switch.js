const animal = "Leopard";

switch (animal) {
  case "Lion": {
    console.log("404 - Animal not found");
    break;
  }

  case "Tiger": {
    console.log("404 - Animal not found");
    break;
  }

  case "Monkey":
  case "Leopard": {
    console.log("Yeah, Got it");
    break;
  }

  default:
    console.log("Maybe something else!");
    break;
}

console.log("Program Ended");

const food = "Sushi";

if (food === "Fish") {
  console.log("Sounds fishy...");
} else if (food === "Hummus") {
  console.log("Want chip with that?");
} else if (food === "Sushi") {
  console.log("With or without seaweed");
} else {
  console.log("Food not in our database, sorry!");
}

// Using switch case

switch (food) {
  case "Fish": {
    console.log("Sounds fishy...");
    break;
  }

  case "Hummus": {
    console.log("Want chip with that?");
    break;
  }

  case "Sushi": {
    console.log("With or without seaweed");
    break;
  }

  default:
    console.log("Food not in our database, sorry!");
    break;
}

const activities = ["Swimming", "Hiking", "Rock Climbing", "Biking", "Running"];

for (const activity of activities) {
  console.log(activity);

  switch (activity) {
    case "Swimming": {
      console.log("Swimming is a great activity");
      break;
    }

    case "Hiking": {
      console.log("Hiking is a great activity");
      break;
    }

    case "Rock Climbing": {
      console.log("Rock Climbing is a great activity");
      break;
    }

    case "Biking": {
      console.log("Biking is a great activity");
      break;
    }

    case "Running": {
      console.log("Running is a great activity");
      break;
    }

    default:
      console.log("Activity not found");
      break;
  }
}

const enemies = {
  rat: { atk: 3, def: 2, hp: 20, class: 1 },
  goblin: { atk: 10, def: 6, hp: 50, class: 1 },
  troll: { atk: 30, def: 20, hp: 200, class: 2 },
  gaint: { atk: 50, def: 40, hp: 500, class: 1 },
};

for (const enemy of Object.values(enemies)) {
  console.log(enemy);

  switch (enemy.class) {
    case 1: {
      console.log("This is easy flight");
      break;
    }

    case 2: {
      console.log("This will require some training");
      break;
    }

    default:
      console.log("Enemy class not found");
      break;
  }
}

const points = [3, 4, 1, 0, 1, 5, 6];

for (const point of points) {
  console.log(point);

  switch (point) {
    case 0:
    case 1:
    case 2: {
      console.log("Good try");
      break;
    }

    case 3: {
      console.log("Very well done");
      break;
    }

    case 4: {
      console.log("Very well done");
      break;
    }

    case 5: {
      console.log("Very well done");
      break;
    }

    default: {
      console.log("Wow, shooting for the moon");
    }
  }
}
