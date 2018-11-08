'use strict';
export { };

const students: any[] = [
  { name: 'Theodor', age: 3, candies: 2 },
  { name: 'Paul', age: 9.5, candies: 2 },
  { name: 'Mark', age: 12, candies: 5 },
  { name: 'Peter', age: 7, candies: 3 },
  { name: 'Olaf', age: 12, candies: 7 },
  { name: 'George', age: 10, candies: 1 }
];

let i: number = 0;

// create a function that takes a list of students and logs: 
// - how many candies are owned by students

function studentsAndCandies(array1: string[]) {
  console.log(students[i].name + ' has ' + students[i].candies + ' candie(s).');
}

for (i; i < students.length; i++) {
  studentsAndCandies(students);
}

// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

function sumOfAge(array1: string[]) {
  let sum: number = 0;
  for (let j: number = 0; j < students.length; j++) {
    if (students[j].candies < 5) {
      sum += students[j].age;
    }
  }
  return sum
}

console.log(sumOfAge(students));
