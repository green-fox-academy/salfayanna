'use strict'

let backToGameButton = document.querySelector('.backToGame');

backToGameButton.addEventListener('click', (event)=> {
  event.preventDefault();
  window.location = 'http://localhost:3000/';
// let xhr = new XMLHttpRequest();
// xhr.open('GET', '/');
// xhr.send();
})