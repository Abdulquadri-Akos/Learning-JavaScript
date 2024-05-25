const response = fetch("http://www.wallhaven.cc");

console.log(response);

// response.then((result) => {
//   for (const key in result) {
//     console.log(key);
//   }

//   //   console.log(result.__proto__);
//   console.log(result.__proto__.__proto__);
//   console.log(result.url);
//   console.log(result.status);
//   console.log(result.ok);
//   console.log(result.headers);

//   const text = result.text();
//   text.then((data) => {
//     console.log(data);
//   });
// });

// Using promise chaining
// response
//   .then((result) => {
//     return result.text();
//   })
//   .then((html) => {
//     console.log(html);
//   });

// // console.log(fetch);

// Using async/await
const fetchData = async () => {
  const data = await fetch("http://www.wallhaven.cc");
  console.log(data);

  const text = await data.text();
  console.log(text);
};

fetchData();

const getText = async () => {
  const response = await fetch("https://www.craigslist.org/about");
  console.log(response);

  const text = await response.text();
  console.log(text);
};

getText();

