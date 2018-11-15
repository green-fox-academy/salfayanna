'use strict'
export { };

// Given a string, compute recursively a new string where all the 'x' chars have been removed.

function xRemover(stringToChange: string): string {
  if (!stringToChange.includes('x')) {
    return stringToChange;
  } else {
   return xRemover(stringToChange.replace('x', ''));
  }
}

console.log(xRemover('xoxoxoxoxo'));