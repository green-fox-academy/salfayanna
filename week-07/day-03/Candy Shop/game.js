'use strict'

let candyButton = document.querySelector('.create-candies');
let candies = document.querySelector('.candies');
let rain = document.querySelector('.candy-machine');

let candyCount = 0;

candyButton.addEventListener('click', (event) => { candies.innerHTML = candyCount += 1 })

let lollypopButton = document.querySelector('.buy-lollypops');
let lollypops = document.querySelector('.lollypops');

let timer = null;
let interval = 1000;

let lollypopCount = 3;
let lp = '🍭';

let speed = document.querySelector('.speed');
let speedCount = 0;

lollypops.innerHTML = lp.repeat(lollypopCount);

lollypopButton.addEventListener('click', (event) => {
  if (candyCount >= 100) {
    lollypopCount += 1;
    candyCount -= 100;
    candies.textContent = candyCount;
    lollypops.innerHTML += lp;
  }
  if (lollypopCount === 10 && timer === null) {
    timer = setInterval(candyAdder, interval);
  }
  speedCount = Math.floor(lollypopCount / 10);
  speed.innerHTML = speedCount;
})

let candyAdder = () => {
  candyCount += speedCount;
  candies.textContent = candyCount;
}

rain.addEventListener('click', (event) => {
  clearInterval(timer);
  interval /= 10;
  timer = setInterval(candyAdder, interval);
})

