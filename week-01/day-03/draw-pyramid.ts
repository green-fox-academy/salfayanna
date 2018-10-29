'use strict';
export {};

let lineCount: number = 4;

/*for (var line = "#"; line.length < 8; line += "#")
  console.log(line); ez háromszöget csinál csak sokkal
  rövidebben mint én az előző feladatban*/
  
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