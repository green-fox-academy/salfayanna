'use strict';
export { };

function divideTen(a: number): number {
  if (a === 0) {
    throw new Error('fail');
  }
  return 10 / a;
}

try {
  console.log(divideTen(5));
} catch (e) {
  console.log(e.message);
}