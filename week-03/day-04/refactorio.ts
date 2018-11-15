'use struct'
export { };

// Create a recursive function called `refactorio`
// that returns it's input's factorial

function factorial(number: number): number {
  if (number <= 1) { //base case
    return 1;
  }
  else {
    return number * factorial(number - 1);
  }
}

console.log(factorial(5));