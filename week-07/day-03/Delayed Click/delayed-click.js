'use strict'

const button = document.querySelector('button');
const text = document.querySelector('p');
let event = () => text.innerHTML = '2 seconds ellapsed'
let timing = setTimeout(event, 2000)

button.addEventListener('click', timing);