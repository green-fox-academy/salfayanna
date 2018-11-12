'use strict';
export { };
const fs = require('fs');
// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

function readFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    return null;
  }
}

function copy(fileName: string, fileNameTo: string): void {
  let fileContains: string = readFile(fileName);
fs.writeFileSync(`${fileNameTo}`, `${fileContains}`)
}

copy('my-file.txt', 'my-file_copy.txt');