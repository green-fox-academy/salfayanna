'use strict';
export {};

// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

let n:number = 5

function sum(n) {
    let b = 0;
    for (let i = 1; i <= n; i++) {
      b += i;
    }
    return b;
  }

  console.log(sum(n));
