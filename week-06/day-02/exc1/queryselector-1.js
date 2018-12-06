'use strict'

const king = document.querySelector('#b325');
console.log(king.innerHTML);

const businessLamp = document.querySelectorAll('.big');
businessLamp.forEach(e => {
  console.log(e.innerHTML);
});

const conceitedKingContainer = document.querySelector('.container');
const conceitedKing = conceitedKingContainer.querySelectorAll('.asteroid');
conceitedKing.forEach(e => alert(e.innerText));

const noBusiness = document.querySelectorAll('div');
noBusiness.forEach(e => console.log(e.innerText));
