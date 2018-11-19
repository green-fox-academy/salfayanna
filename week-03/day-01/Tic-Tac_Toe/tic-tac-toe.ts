import { sep } from "path";

'use strict';
export { };
const fs = require('fs');

// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file

function readFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    return null;
  }
}

function separateEments(fileName: string): string[][] {
  let fileData: string = readFile(fileName);
  let table: string[][] = [];
  if (fileData !== null) {
    //table.push(fileData)
    fileData.split('\r\n').forEach(e => table.push(e.split('')));
  }
  return table;
}

  //console.log(separateEments('win-o.txt'));

  function findWinner(fileName: string) {
    for (let i = 0; i < separateEments(fileName).length; i++) {
      for (let j = 0; j < separateEments(fileName).length; j++) {
       if(separateEments[i][j] === 'O' && separateEments[i][j+1] === 'O'){

         return console.log(findWinner(fileName));
       } else {
         return console.log('poroba');
       }
      }      
    }
  }

findWinner('win-o.txt');

// console.log(ticTacResult('win-o.txt'))
// // Should print "O"

// console.log(ticTacResult('win-x.txt'))
// // Should print "X"

// console.log(ticTacResult('draw.txt'))
// // Should print "Draw"