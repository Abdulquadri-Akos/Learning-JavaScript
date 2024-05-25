import inquirer from "inquirer";
import { parseOptions } from "./savings.js";

// const question = {
//   type: "input",
//   name: "pokemon",
//   message: "Enter a pokemon name",
// };

// inquirer.prompt(question).then((answers) => {
//   console.log(`You entered: ${answers.pokemon}`);
// });

const promptForPokemon = async () => {
  return await inquirer.prompt({
    type: "input",
    name: "pokemon",
    message: "Enter a pokemon name",
  });
};

//checbox
const downloadPokeman = async () => {
  return await inquirer.prompt({
    type: "checkbox",
    name: "options",
    message: "PokemonInfo to Download",
    choices: [
      new inquirer.Separator(" -- Options -- "),
      {
        name: "Sprites",
      },
      {
        name: "Stats",
      },
      {
        name: "Official Artwork",
      },
    ],
  });
};

//continue
const promptToContinue = async () => {
  return await inquirer.prompt({
    type: "list",
    name: "continue",
    message: "Would you like to search for another pokemon?",
    choices: ["Yes", "No"],
  });
};

// fetch(`https://pokeapi.co/api/v2/pokemon/mew`).then((resolve) => {
//   resolve.json().then((data) => {
//     console.log(data);
//   });
// });

const fetchPokemon = async (pokemonName) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

const promptUser = async () => {
  while (true) {
    const pokemonName = await promptForPokemon();
    // console.log(pokemonName.pokemon);

    // fetch pokemon user
    const pokemonJSON = await fetchPokemon(pokemonName.pokemon);

    // fetch the option selected
    const pokemonOptions = await downloadPokeman();

    // await what is inside the option to fetch the sprites / pictures
    await parseOptions(pokemonJSON, pokemonOptions);

    const keepGoing = await promptToContinue();

    if (keepGoing.continue === "No") {
      break;
    }
  }
};

// promptUser();

export { promptUser };
