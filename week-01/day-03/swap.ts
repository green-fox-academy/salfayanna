'use strict';
export { };

let a: number = 123;
let b: number = 526;
let temp: number;

temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);
