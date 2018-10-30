'use strict';
export {};

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)


function printParams(...any){

        for (let i: number = 0; i < any.length; i++){
        console.log(any[i]);
    }
 
 }
 printParams("random", "puppy", 9, "ejj")