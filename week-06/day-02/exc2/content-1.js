'use strict'

let pTags = document.querySelectorAll('p');
const animals = document.querySelectorAll('.animals');

pTags.forEach(e => e.innerText = animals.innerText);

pTags.forEach(e => e.innerHTML = animals.innerHTML);