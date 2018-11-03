'use strict';
export { };

let lineCount: number = 7;

/*for (let i = 0; i < lineCount; i++) {
  let str = '';
  for (let j = 1; j < lineCount - i; j++) {
    str = str + ' ';
  }
  for (let k = 1; k <= (2 * i + 1); k++) {
    str = str + '*';
  }
  console.log(str);
}*/

for (let row = 0; row < lineCount; row++) {
  let strg: string = '';
  if (row < lineCount / 2) {
    for (let j = 1; j < lineCount - row; j++) {
      strg = strg + ' ';
    }
    for (let k = 0; k <= (2 * row); k++) {
      strg = strg + '*';
    }
  } else if (row === lineCount / 2) {
    strg = '*'.repeat(lineCount);
  } else {
    for (let k = 1; k <= (row); k++) {
      strg = strg + ' ';
    }
    for (let j = 1; j < 2 * (lineCount - row); j++) {
      strg = strg + '*';
    }
  }
  console.log(strg);
}

