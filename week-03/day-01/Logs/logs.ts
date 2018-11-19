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

function getData(fileName: string): any {
  let fileData: string = readFile(fileName);
  let ipAdress: any[] = [];
  if (fileData !== null) {
    fileData.split('\r\n').forEach(e => {
      e.split('   ').forEach((elem, index) => {
        if(elem[index] === elem[3])
        ipAdress.push(elem);
      })
  })
}
return  console.log(ipAdress);
    }

getData('source.txt');