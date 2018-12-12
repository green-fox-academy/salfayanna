'use strict'

const button = document.querySelector('button');
const text = document.querySelector('p');
let event = () => text.innerHTML = '5 seconds elapsed and clicked 3 times';
let counter = 0;
let threeclick = () => {
  counter++;
}

setTimeout(() => {
  if (counter === 3) {
    event();
  }
}, 5000);

button.addEventListener('click', threeclick);