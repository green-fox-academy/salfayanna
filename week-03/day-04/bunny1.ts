'use struct'
export { };

// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

function bunnyBigFloppyEarCounter(numberOfBunnies: number){
if( numberOfBunnies <= 0) {
  return 0;
} else {
  return bunnyBigFloppyEarCounter(numberOfBunnies - 1) + 2;
}
}

console.log(bunnyBigFloppyEarCounter(5));