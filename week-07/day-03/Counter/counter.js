'use strict'

const listElements = document.querySelectorAll('li');
const button = document.querySelector('button');
const result = document.querySelector('.result');
let counter = 0;
const number = () => listElements.forEach(e => {counter++; result.textContent = counter;})

button.addEventListener('click', number);
