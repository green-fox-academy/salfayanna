'use strict'

const globalWindow = document.querySelector('body');
const h1Element = document.querySelector('h1'); 

globalWindow.addEventListener('keyup', (event) => {
  const keyName = event.key;
  h1Element.innerHTML=`Last key pressed: ${keyName}`;
});
