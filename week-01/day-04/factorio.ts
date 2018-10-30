'use strict';
export {};

// -  Create a function called `factorio`
//    that returns it's input's factorial

let counter:number = 5;

function factorio(counter:number) {
    let sum:number = 1;
    for( let index = 1; index < counter + 1; index++) {
        sum *= index;   
    }
    return sum;
}

console.log(factorio(counter));

