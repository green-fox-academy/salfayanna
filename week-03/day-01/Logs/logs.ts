'use strict';
export { };
const fs = require('fs');
// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

function readFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    return null;
  }
}

function getData(fileName: string) {
  let fileData: string = readFile(fileName);
  let index: number = 0;
  let ipAdress: any[] = [];
  if (fileData !== null) {
    fileData.split('\r\n').forEach(e => {
      e.split(' ').forEach(elem => {
        if (elem[index] === elem[4]) {
          ipAdress.push(elem[4]);
        }
      }
    })
  }
  return ipAdress;
}
  

  console.log('source.txt');