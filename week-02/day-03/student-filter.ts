'use strict';
export { };

const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

function candyCounter(array1: any[]) {
  let candyOwners: string = '';
  for (let i = 0; i < students.length; i++) {
    if (students[i].candies > 4) {
      candyOwners += students[i].name + ', ';
    }
  }
  return candyOwners;
}

console.log(candyCounter(students));

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function candyAvarage(array1: any[]) {
  let sum: number = 0;
  let avg: number = 0;
  for (let i: number = 0; i < students.length; i++) {
    sum += students[i].candies;
  }
  avg = sum / students.length;
  return avg;
}

console.log(candyAvarage(students));