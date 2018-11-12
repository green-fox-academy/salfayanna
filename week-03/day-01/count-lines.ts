'use strict';
export { };
const fs = require('fs');
// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

function readFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    return null;
  }
}

function writeOutLines(filename: string): number {
  const fileContent: string = readFile(filename);
  let lineCount: number = 0;
  if (fileContent === null) {
    return 0;
  } else {
    lineCount = fileContent.split('\r\n').length;
    return lineCount;
  }
}

console.log(writeOutLines('my-file.txt'));