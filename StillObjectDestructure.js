// const store = new Map();

// store.set("Cups", 46);
// store.set("Candles", 121);
// store.set("Vases", 215);

// for (const [keys, values] of store) {
//   console.log(`${keys} => ${values}`);
// }

const xyzCalc = ({ x, y, z }) => {
  return 5 * x - 2 * y - z;
};

const result1 = xyzCalc({ x: 20, y: 2, z: 7 });
const result2 = xyzCalc({ x: 2, y: 1, z: 20 });
const result3 = xyzCalc({ x: 100, y: 100, z: 100 });
console.log(result1, result2, result3);

const xyzCalc2 = (Obj) => {
  return 5 * Obj.x - 2 * Obj.y - Obj.z;
};

const resultOb1 = xyzCalc2({ x: 20, y: 2, z: 7 });
const resultOb2 = xyzCalc2({ x: 2, y: 1, z: 20 });
const resultOb3 = xyzCalc2({ x: 100, y: 100, z: 100 });
console.log(resultOb1, resultOb2, resultOb3);

const twoNumbers = ([a,b]) => {
    return a + b + 5
}

console.log(twoNumbers([2, 3]));