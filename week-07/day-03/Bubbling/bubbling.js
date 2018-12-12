'use strict'

const buttons = document.querySelector('nav');
let img = document.querySelector('.img-inspector');
let posX = 0;
let posY = 0;
let size = 200;

buttons.addEventListener('click', (event) => {
  let direction = event.target.dataset.direction;
  if(size > 100){
    if (direction === "up" && posY > -321 && posY <0) {
      posY += 10;
      img.style.backgroundPosition = `${posX}px ${posY}px`;
    } else if (direction === "down" && posY > -320) {
      posY -= 10;
      img.style.backgroundPosition = `${posX}px ${posY}px`;
    } else if (direction === "right" && posX > -500) {
      posX -= 10;
      img.style.backgroundPosition = `${posX}px ${posY}px`;
    } else if (direction === "left" && posX > -501 && posX < 0) {
      posX += 10;
      img.style.backgroundPosition = `${posX}px ${posY}px`;
    } else if (direction === "in") {
      size += 20;
      img.style.backgroundSize = `${size}%`;
    } else if (direction === "out") {
      size -= 20;
      img.style.backgroundSize = `${size}%`;
    }
  }
})