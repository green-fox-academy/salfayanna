'use strict'

// Giphy API
// Display gifs of a cute/funny topic using: https://developers.giphy.com/docs/

// Obtain an API key
// Search/Find the images in the API
// Display the list of the first 16 results's static thumbnail
// If the user clicks on the thumbnail, display the animated GIF

const API_BASE_URL = 'http://api.giphy.com/v1/gifs/search?q=cute&api_key=yH9Jliy0GRjLshbz0rdm3xU1eCyp6lA5&limit=16';
//const API_key = 'yH9Jliy0GRjLshbz0rdm3xU1eCyp6lA5';

const xhr = new XMLHttpRequest();

xhr.open('GET', `${API_BASE_URL}`, false);
xhr.send();

let pics = JSON.parse(xhr.response);
console.log(pics);
//console.log(pics.data);

let urlList = [];
let bigPics = [];

pics.data.forEach(element => {
  urlList.push(element.images.fixed_width_small_still);
  bigPics.push(element.images.original);
});

console.log(urlList);
console.log(bigPics);

let images = document.querySelector('.images');
console.log(images);

for (let i = 0; i < urlList.length; i++) {
  let newImg = document.createElement('img');
  let link = document.createElement('a');
  link.href = bigPics[i].url
  newImg.src = urlList[i].url;
  link.appendChild(newImg);
  images.appendChild(link);
}





//.onclick = function() { alert(bigPics[i].url); };




