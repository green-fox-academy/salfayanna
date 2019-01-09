'use strict'

let startButton = document.querySelector('.start');

startButton.addEventListener('click', (event) => {
  window.location = 'http://localhost:3000/game';
});
