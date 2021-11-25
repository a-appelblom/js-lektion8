// import { useState } from "react";
import HigherOrLower from "./HigherOrLower";
import "./App.css";

// const anObj = {
//   a: "Javascript",
//   b: 4,
//   c: ["E", "V", "E", "R"],
//   d: {
//     da: "Hej",
//     db: "på",
//     dc: "dig",
//   },
//   e: [{ ea: "HEj 1" }, { eb: "hej 2" }],
//   f: [
//     ["Arrayer", 2, { fisk: "sven" }],
//     ["nästlas", "såhär"],
//   ],
// };

// const pushStr = "Hejsan hoppsan";
// const anArray = ["Hejsan", "hoppsan", "hallå", "detta", "är", "roligt"];

// Punktsyntax
// console.log(anObj.a);
// console.log(anObj.b);
// console.log(anObj.c[0]);
// console.log(anObj.d);
// console.log(anObj.e);
// console.log(anObj.f[0]);

// anObj.f[0].push(pushStr);
// console.log(anObj.f[0]);

// console.log("Klammersyntax");
// console.log("===================");

// Klammersyntax.
// console.log(anObj["a"]);
// console.log(anObj["b"]);
// console.log(anObj["c"]);
// console.log(anObj["d"]["da"]);

// console.log("Destructuring");
// console.log("===================");

// destructuring
// const {
//   a,
//   b,
//   c,
//   d: { da },
//   e,
//   f,
// } = anObj;

// const [first, second, third, fourth] = anObj.c;

// console.log(anObj);
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(e);
// console.log(f);
// console.log(da);
// console.log(first, second, third, fourth);

// console.log("Spread operator");
// console.log("===================");

// Spread operator
// const newArray = [...anObj.c, pushStr];
// const { a, b, ...rest } = anObj;
// const newObj = { ...anObj, g: "Ny sträng" };
// console.log(newArray);
// console.log(a);
// console.log(rest);
// console.log(newObj);

// console.log("Array metoder");
// console.log("===================");
// function forEachFunction(item, index, arr) {
//   console.log(item, index, arr);
// }
// anArray.forEach(forEachFunction);
// function mapFunction(item, index, arr) {
//   console.log(item, index, arr);
//   return item + " " + index;
// }
// const mappedArray = anArray.map(mapFunction);
// console.log(mappedArray);

// console.log("Objekt metoder");
// console.log("===================");
// const keyArray = Object.keys(anObj); // Skapar en string array av alla keys i vårat objekt som skickas in i metoden
// console.log(keyArray);
// keyArray.forEach((item, index, arr) => {
//   // För varje element i vår array
//   console.log(anObj[item]); // Så loggar vi value för den "key" i vårat objekt
// });

// console.log("Conditons & ternaries");
// console.log("===================");
// if (anObj.b <= 4) {
//   console.log("Less than 4");
// }
// if (anObj.b == "4") {
//   console.log("its true");
// }
// if (anObj.b === "4") {
//   console.log("its true again");
// }
// if (true == 1) {
//   console.log("Vad händer?", true + 1);
// }
// if (!anObj.b) {
//   console.log("Jag finns");
// }

// anObj.b === 4 ? console.log("its 4") : console.log("Something else");
// const test = anObj.b ? console.log("its defined") : false;
// console.log(test);
// const test2 = !anObj.b && console.log("its defined");
// console.log(test2);

// console.log("Conditons & ternaries");
// console.log("===================");
// function myFunction({ b, c, ...rest }) {
//   console.log(b, c, rest);
// }
// const myArrow = ([a, b, ...rest]) => {
//   console.log(a, b, rest);
// };
// myFunction(anObj);
// myArrow(anArray);

function App() {
  // const [state, setState] = useState();
  return (
    <div className="App">
      <HigherOrLower />
      {/* <h1>Hej</h1> */}
      {/* <p>{anObj.a}</p>
      <p>{anObj.b}</p>
      <p>{anObj.c[0]}</p>
      <p>{anObj.d.da}</p>
      <p>{anObj.e[1].eb}</p> */}
      {/* <h1>{a}</h1> */}
    </div>
  );
}

export default App;
