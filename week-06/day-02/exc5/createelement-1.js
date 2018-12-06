'use strict'

const asteroidList = document.querySelector('ul.asteroids');
const newAsteroid = document.createElement('li');
const newAsteroid2 = document.createElement('li');

newAsteroid.id = 'b555';
newAsteroid.textContent = 'The Green Fox';
asteroidList.appendChild(newAsteroid);

newAsteroid2.id = 'b575';
newAsteroid2.textContent = 'The Lamplighter';
asteroidList.appendChild(newAsteroid2);

const container = document.querySelector('.container');
const newHeading = document.createElement('h1');
newHeading.textContent = 'I can add elements to the DOM!';
container.appendChild(newHeading);

const newImg = document.createElement('img');
newImg.src = 'https://i.pinimg.com/originals/63/03/70/6303705fc422af7a094e672a29e5acc4.png'
container.appendChild(newImg);

