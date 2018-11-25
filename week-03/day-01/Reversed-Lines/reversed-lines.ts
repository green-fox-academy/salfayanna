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
  let text: string[][] = [];
  let reversedTetx: string[] = [];
  if (fileData !== null) {
    fileData.split('\r\n').forEach(e => text.push(e.split('')));
  }

  text.forEach(element =>{
    reversedTetx.push(element.reverse().join(''));
    reversedTetx.push('\r\n');
    });

  fs.writeFileSync('reversedText.txt', reversedTetx.join(''));
}

separateElements('source.txt');