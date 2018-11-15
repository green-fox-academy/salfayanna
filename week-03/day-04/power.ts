'use strict'
export { };

// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

function powerN(baseNumber: number, number: number): number {
  if ( number <= 0) {
    return 1;
  } else {
    return powerN(baseNumber, number-1) * baseNumber;
  }
}

console.log(powerN(3,2));