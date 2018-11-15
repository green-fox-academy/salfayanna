'use struct'
export { };

// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
// (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say
// have 3 ears, because they each have a raised foot. Recursively return the
// number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

function bunnyBigFloppyEarCounter(numberOfBunnies: number){
  if( numberOfBunnies <= 0) {
    return 0;
  } else if ( numberOfBunnies % 2 === 0) {
    return bunnyBigFloppyEarCounter(numberOfBunnies - 1) + 3;
  } else { 
    return bunnyBigFloppyEarCounter(numberOfBunnies - 1) + 2;
  }
  }
  
  console.log(bunnyBigFloppyEarCounter(5));