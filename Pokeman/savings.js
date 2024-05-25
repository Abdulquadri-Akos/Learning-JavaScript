import fs from "fs/promises";
import path from "path";
// import { fetchPokemon } from "./prompt.js";

// console.log(path.sep);

// console.log(process.cwd());

const createFolder = async (folderName) => {
  // get the current path
  const filePath = path.join(process.cwd(), folderName);

  try {
    await fs.access(folderName);
  } catch {
    fs.mkdir(folderName);
  }
};

// createFolder("Hello");

// const pokemanObject = await fetchPokemon("mewtwo");
// console.log(pokemanObject);

const savePokemonStats = async (folderName, pokemanStatsObject) => {
  let statString = "";

  for (const stats of pokemanStatsObject) {
    statString += `${stats.stat.name}: ${stats.base_stat}\n`;
  }

  await createFolder(folderName);
  const filePath = path.join(process.cwd(), folderName, "stats.txt");
  await fs.writeFile(filePath, statString);
};

// savePokemonStats("mewtwo", pokemanObject.stats);

// savePokemonStats(pokemanObject.stats);

const savePokemonArtwork = async (folderName, pokemanSpritesObject) => {
  const url = pokemanSpritesObject.other["official-artwork"].front_default;

  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();

  await createFolder(folderName);
  const filePath = path.join(process.cwd(), folderName, "artwork.png");
  await fs.writeFile(filePath, Buffer.from(arrayBuffer));
};

// savePokemonArtwork("mewtwo", pokemanObject.sprites);

const savePokemonSprites = async (folderName, pokemanSpritesObject) => {
  let spritePromise = [];
  let spriteName = [];

  for (const [name, url] of Object.entries(pokemanSpritesObject)) {
    if (!url) continue;
    if (name === "other" || name === "versions") continue;

    spritePromise.push(fetch(url).then((response) => response.arrayBuffer()));
    spriteName.push(name);
  }

  spritePromise = await Promise.all(spritePromise);
  await createFolder(folderName);
  for (let i = 0; i < spritePromise.length; i++) {
    const filePath = path.join(
      process.cwd(),
      folderName,
      `${spriteName[i]}.png`
    );
    await fs.writeFile(filePath, Buffer.from(spritePromise[i]));
  }
};

const parseOptions = async (pokemanObject, optionsObject) => {
  const option = optionsObject.options;
  const pokemanName = pokemanObject.name;

  if (option.includes("Stats")) {
    await savePokemonStats(pokemanName, pokemanObject.stats);
  }

  if (option.includes("Official Artwork")) {
    await savePokemonArtwork(pokemanName, pokemanObject.sprites);
  }

  if (option.includes("Sprites")) {
    await savePokemonSprites(pokemanName, pokemanObject.sprites);
  }
};

export { parseOptions };
