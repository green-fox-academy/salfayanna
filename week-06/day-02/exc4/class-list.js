'use strict'

const classes = document.querySelectorAll('p');

if(classes[3].classList.contains('dolphin')){
classes[0].innerText = 'pear';
}
if(classes[0].className === 'apple'){
  classes[2].innerText = 'dog';
}

classes[0].setAttribute('class', 'red');

let balloon = document.querySelector('.balloon');
balloon.style.borderRadius = '0';
