'use struct'
export { };

// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

function xChangerToY(stringToChange: string): string {
  if (!stringToChange.includes('x')) {
    return stringToChange;
  } else {
   return xChangerToY(stringToChange.replace('x', 'y'));
  }
}

console.log(xChangerToY('xoxoxoxoxo'));