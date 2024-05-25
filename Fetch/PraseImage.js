import fs from "fs/promises";

// console.log(fs);

const fetchImage = async () => {
  try {
    const response = await fetch(
      "https://w.wallhaven.cc/full/2y/wallhaven-2yjp6x.png"
    );

    // fs.writeFile (file, data [options], callback)
    fs.writeFile("image.png", response.body).then(() => {
      console.log("image downloaded");
    });
  } catch (error) {
    console.log("Oppps! Image failed");
  }
};

// fetch("https://w.wallhaven.cc/full/2y/wallhaven-2yjp6x.png").then(
//   (response) => {
//     return response.arrayBuffer().then((image) => {
//       fs.writeFile("image.png", Buffer.from(image), () => {
//         console.log("image downloaded");
//       });
//     });
//   }
// );

fetchImage();
