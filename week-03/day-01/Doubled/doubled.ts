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

function separateElements(fileName: string): string[][] {
  let fileData: string = readFile(fileName);
  let text: string[][] = [];
  if (fileData !== null) {
    fileData.split('\r\n').forEach(e => text.push(e.split('')));
  }
  return text;
}

function getEverySecondElement(filename: string) {
  let text: string[][] = separateElements(filename);
  let secondElements: string[] = [];

  text.forEach((element) => {
    for (let i: number = 0; i < element.length; i++) {
      if (i % 2 === 0) {
        secondElements.push(element[i]);
      }
    }
    secondElements.push('\r\n');
  });
  fs.writeFileSync('joined.txt', secondElements.join(''));
}

getEverySecondElement('source.txt');