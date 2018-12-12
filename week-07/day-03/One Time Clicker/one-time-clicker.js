'use strict'

//Első megoldás

const body = document.querySelector('body');
const button = document.querySelector('button');
let newTime = document.createElement('p');
body.appendChild(newTime);
let time = () => newTime.innerHTML = Date.now();
let buttonClick = () => button.disabled = true;

button.addEventListener('click',time);
button.addEventListener('click', buttonClick);


//Második megoldás

let counter = 0;
button.addEventListener('click', (event) => {
  if(counter === 0){
    console.log(event.timeStamp);
    counter ++;
  }
});

//A két szém nem egyezik. Nézd meg!
