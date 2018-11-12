'use strict';
export { };

// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'

const fs = require('fs');

function readFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    console.log(`Unable to read file: ' + ${fileName}`);
    return null;
  }
}

function writeOutLines(filename: string): string {
  const fileContent: string = readFile(filename);
  if (fileContent !== null) {
    fileContent.split('/r/n');
  }
  return fileContent;
}

console.log(writeOutLines('my-file.txt'));