'use strict'

const url = 'https://swapi.co/api';

const search = document.querySelector('.search');
const results = document.querySelector('.results');
const movies = document.querySelector('.movies');

let xhr = new XMLHttpRequest();
let characterList = {};
let filmList = [];

xhr.onload = () => {
  if (xhr.status === 200) {
    characterList = JSON.parse(xhr.responseText);
    createResultsTable(characterList);
    console.log(characterList);
  }
}

search.addEventListener('click', (event) => {

  while(results.firstChild) {
    results.removeChild(results.firstChild);
  }

  let inputValue = document.querySelector('input').value;
  console.log(inputValue);
  let reqUrl = `${url}/people/?search=${inputValue}`;
  xhr.open('GET', reqUrl);
  xhr.send();
})

results.addEventListener('click', (event) => {

  while(movies.firstChild) {
    movies.removeChild(movies.firstChild);
  }

  characterList.results.find((element) => {
    return element.name === event.target.innerHTML
  }).films.forEach(element => {
    let xhrMov = new XMLHttpRequest();
    xhrMov.open('GET', element);
    console.log(element);
    xhrMov.send();

    xhrMov.onload = () => {
      if(xhrMov.status === 200){        
        let film = JSON.parse(xhrMov.response);
        let filmElem = document.createElement('li');
        filmElem.innerHTML = film.title;
        movies.appendChild(filmElem);
      }
    }

  })
  
})


let createResultsTable = (characterList) => {
  characterList.results.forEach(element => {
    let name = document.createElement('li');
    name.innerHTML = element.name;
    results.appendChild(name);
  });
}

let createMoviesTable = () => {
  filmList.forEach((element) => {
    let filmElem = document.createElement('li');
    filmElem.innerHTML = element;
    movies.appendChild(filmElem);
  });
}
