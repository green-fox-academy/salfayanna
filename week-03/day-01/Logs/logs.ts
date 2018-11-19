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

function getUniqeIps(fileName: string): any[] {
  let fileData: string = readFile(fileName);
  let ipAdress: any[] = [];
  if (fileData !== null) {
    fileData.split('\r\n').forEach(e => {
      ipAdress.push(e.split('   ')[1]);
    })
  }
  let uniqueIpAdresses: any[] = [];
  uniqueIpAdresses.push(new Set(ipAdress))
  return uniqueIpAdresses;
}


function getRatio(fileName: string): number {
  let fileData: string = readFile(fileName);
  let getCount: number = 0;
  let postCount: number = 0;
  if (fileData !== null) {
    fileData.split('\r\n').forEach(e => {
      e.split('   ').forEach((elem) => {
        if (elem === 'GET /') {
          getCount++;
        } else if (elem === 'POST /') {
          postCount++;
        }
      })
    })
  }
  let ratio: number = getCount / postCount;
  return ratio;
}

console.log(getUniqeIps('source.txt'));
console.log(getRatio('source.txt'));
