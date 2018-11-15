'use struct'
export { };
// Write a recursive function that takes one parameter: n and counts down from n.

function countDown(num: number): string | number {
  let numbers: number = number;
  if (num === 0) { 
    return 0;
  }
  else {
    countDown(num - 1);
    numbers += num;
    return num;
  }
  console.log(numbers);
}

countDown(10);
