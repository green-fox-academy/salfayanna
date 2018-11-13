'use strict';
export { };

import { Domino } from "./domino";

function initializeDominoes(): Domino[] {
  let dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}


let dominoes = initializeDominoes();


let dominoSnake: Domino[] = [];
dominoSnake.push(dominoes[0]);
dominoes.splice(0, 1);
//sconsole.log(dominoes);

while (dominoes.length > 0) {
  let nextDominoIndex: number = dominoes.findIndex(element => element.values[0] === dominoSnake[dominoSnake.length -1].values[1]);
  dominoSnake.push(dominoes.splice(nextDominoIndex, 1)[0]);
}

function print(dominoSnake: Domino[]) {
  dominoSnake.forEach(function (value) {
    console.log(value);
  });
}
print(dominoSnake);
