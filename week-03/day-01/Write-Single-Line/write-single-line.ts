import { fileURLToPath } from "url";

'use strict';
export { };
const fs = require('fs');
// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

function readFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    console.log(e.message);
    return null;
  }
}

function writeSingleLine(fileName: string): string {
  let fileContent: string = readFile(fileName);
if(fileContent !== null){
  fs.writeFileSync(`${fileName}`, 'Anna Rita Salfay', 'utf-8' );
  return fileName;
}
throw new Error ('Unable to write file: my-file.txt');
}

writeSingleLine('my-file.txt');