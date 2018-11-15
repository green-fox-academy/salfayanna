'use struct'
export { };

// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.

function starInserter(stringToChange: string): string {
  if (stringToChange.length === 1) {
    return stringToChange;
  } else {
    return starInserter(stringToChange.substring(0,stringToChange.length-1))+'*'+ stringToChange[stringToChange.length-1];
  }
}

console.log(starInserter('xoxoxoxoxo'));