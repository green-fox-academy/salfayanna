'use strict'

const pic = document.querySelector(".loginbox input[type=password]");
const login = document.querySelector(".loginbox input[type=submit]");
const picture = document.querySelector(".eye");

let clickevent = () => {
  if(pic.type === "password"){
    pic.type = "text";
    picture.src = "./eye-slash.svg";
  } else if(pic.type === "text"){
    pic.type = "password";
    picture.src = "./eye.svg";
}
}

picture.addEventListener('mouseover', login.classList.add("default"));
picture.addEventListener('click', clickevent);