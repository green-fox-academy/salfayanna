'use strict';
export {};

let lineCount: number = 7;

  for (var i = 0; i < lineCount; i++) {
    var str = '';
    for (var j = 1; j < lineCount-i; j++) {
      str = str + ' ';
    }
    for (var k = 1; k <= (2*i+1); k++) {
      str = str + '*';
    }
    console.log(str);
  }