let companyName = "Mujahid Mohammad";
console.log(companyName);
console.log(typeof companyName); // "string"
console.log(companyName.includes("Mujahid")); // true
let newName=companyName.toUpperCase();
console.log(newName); // "MUJAHID MOHAMMAD"
console.log(newName.length);
console.log(newName.indexOf("MOHAMMAD")); 
// slice : based on index count 
console.log(newName.slice(0, 4)); // "MUJAHID"
console.log(companyName.substring(0,5)); // "MUJAHID"

let lang="JavaScript java playwright";
console.log(lang.split(" ")); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
console.log(lang.slice(-4)); // ["JavaScript", "java", "playwright"]