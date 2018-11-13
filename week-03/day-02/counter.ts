'use strict';
export { };

class Counter {
  integer: number

  constructor(int: number = 0) {
    this.integer = int;
  }

  add(number: number = 1) {
    if (number % 1 === 0) {
      this.integer += number;
    } else { console.log('This isn\'t a whole number. Integer\'s value hasn\'t changed.') }
  }

  get() {
    return `${this.integer}`;
  }

  reset() {
    this.integer = 0;
  }

}

let count = new Counter();
count.add(5.454564);
console.log(count.integer);