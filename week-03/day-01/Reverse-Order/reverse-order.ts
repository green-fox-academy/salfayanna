'use strict'

export { };
const fs = require('fs');

function readFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    return null;
  }
}

function separateElements(fileName: string) {
  let fileData: string = readFile(fileName);
  let text: string[] = [];
  let reversedTetx: string[] = [];
  if (fileData !== null) {
    text = fileData.split('\r\n');
  }
  //let lineCounter: number = text.length;
  reversedTetx.push(text.reverse().join('\r\n'));


  console.log(text);
  console.log(reversedTetx);
  fs.writeFileSync('reversedText.txt', reversedTetx.join(''));
}

separateElements('source.txt');