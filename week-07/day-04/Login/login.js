'use strict'

const pic = document.querySelector(".loginbox input[type=password]");
const login = document.querySelector(".loginbox input[type=submit]");

//console.log(pic);
const style = getComputedStyle(pic)
//console.log(style.cursor);
console.log(login);

//console.log(style);
//console.log(style.backgroundImage);
let clickevent = () => {
  if(style.backgroundImage === `url("eye.svg")`){
    pic.type = "text";
    style.backgroundImage = `url("eye-slash.svg")`;
  } else if(style.backgroundImage === `url("eye-slash.svg")`){
    pic.type = "password";
    style.backgroundImage = `url("eye.svg")`;
}
}

login.addEventListener('mouseover', login.classList.add("pointer"));
style.backgroundImage.addEventListener('mouseover', login.classList.add("pointer"));
style.backgroundImage.addEventListener('click', clickevent);