'use strict'

const array = ['apple', 'banana', 'cat', 'dog'];
let listItems = document.querySelectorAll('li');

listItems.forEach((e,i) => e.textContent = array[i]);

console.log(listItems);

const ul = document.querySelector('ul');
ul.classList.add('green');
