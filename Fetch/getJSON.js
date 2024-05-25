// fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) => {
//   return response.json().then((data) => {
//     console.log(data);
//   });
// });

// const fetchJSON = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   const data = await response.json();
//   console.log(data);
//   console.log(data.userId);
// };

// fetchJSON();

const fetchJSON = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
  const data = await response.json();
  //   console.log(data);
  console.log(data.sprites.other["official-artwork"].front_default);
};

fetchJSON();

fetch("https://pokeapi.co/api/v2/pokemon/pikachu").then((response) => {
  return response.json().then((data) => {
    console.log(
      `Official Artwork: ${data.sprites.other["official-artwork"].front_default}`
    );
  });
});
