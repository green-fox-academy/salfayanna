'use strict'

let startButton = document.querySelector('.start');
let manage = document.querySelector('.manage');

startButton.addEventListener('click', (event) => {
  window.location.reload();
  window.location.href = 'http://localhost:3000/game';
});

manage.addEventListener('click', (event) => {
  window.location.reload();
  window.location.href = 'http://localhost:3000/questions';
});