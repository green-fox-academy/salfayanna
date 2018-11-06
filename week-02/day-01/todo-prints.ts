'use strict';
export { };

// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = 'My todo:\n' + '\t- Buy milk\n' + '\t- Downolad games\n' + '\t\t- Diablo';

console.log(todoText);