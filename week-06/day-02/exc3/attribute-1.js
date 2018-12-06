'use strict'

let link = document.querySelector('img');
console.log(link.src);

link.setAttribute('src', 'https://media.dayoftheshirt.com/images/shirts/Jnrt3/teeturtle_mini-magical-kitt_1502079196.square.png');

let secondLink = document.querySelector('a');

secondLink.setAttribute('href', 'https://www.greenfoxacademy.com/');

let button = document.querySelector('.this-one');
button.disabled = true;
button.innerHTML = 'Don\'t click me!'