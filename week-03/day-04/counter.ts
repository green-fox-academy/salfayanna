'use struct'
export { };
// Write a recursive function that takes one parameter: n and counts down from n.

function countDown(num: number): void {
  console.log(num);
  if (num > 0) {
    countDown(num-1);
}
}

countDown(10);