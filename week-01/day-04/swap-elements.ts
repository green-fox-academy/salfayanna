'use strict';
export {};

// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc:string [] = ["Arthur", "Boe", "Chloe"];

let b = abc[0];
abc[0] = abc[1];
abc[1] = b;

console.log(abc);