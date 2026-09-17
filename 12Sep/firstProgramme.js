// Day 1 — variables and types
// Run: node FirstProgramme.js
// Java you know: String word = "hello";  final String name = "mujju";

console.log("Hello, World!");

// const = Java final. Use this unless the value must change.
const word = "hello mujju";
console.log(word);
console.log(typeof word); // "string"

const word1 = "mujju mohammad";
console.log(word1);

// let = a normal variable you can reassign later.
let yearsOfQa = 9;
yearsOfQa = 10;
console.log(yearsOfQa);
console.log(typeof yearsOfQa); // "number"  (Java int / double are both number in JS)

const isLead = true;
console.log(typeof isLead); // "boolean"

// null is empty on purpose. typeof null is a famous JS bug — it prints "object".
const value = null;
console.log(value);
console.log(typeof value); // "object"  ← do not trust this; the value is still null

// undefined = declared, never given a value. Java does not have this.
let city;
console.log(city); // undefined
console.log(typeof city); // "undefined"
let wordmujju = "Mujahid";
wordmujju = "Mujahid Mohammad";
console.log(wordmujju);
