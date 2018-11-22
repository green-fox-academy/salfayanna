'use strict'

class Sum {

  sum(integerList: number[]): number {
    let sum: number = 0;
    integerList.forEach(element => {
      sum += element;
    });
    return sum;
  }
}

export { Sum };