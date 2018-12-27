'use strict'

const APIkey = '69f450fbb42b4af38b37f97278591cf6';
const url = 'http://api.nytimes.com';

let xhr = new XMLHttpRequest();

xhr.onload = () => {
  if(xhr.status === 200){
    const articles = JSON.parse(xhr.responseText);
    createList(articles);
  }
}

let createList = (articles) => {
let main = document.querySelector('.container');
let list = document.createElement('ul');
articles.response.docs.forEach(element => {
  let listedArticles = document.createElement('li');
  let head = document.createElement('h1');
  let snippet = document.createElement('p');
  let publicDate = document.createElement('p');
  let link = document.createElement('a');

  link.href = element.web_url;
  link.innerText = element.headline.main;
  head.appendChild(link);
  listedArticles.appendChild(head);
  snippet.innerText = element.snippet;
  listedArticles.appendChild(snippet);
  publicDate.innerText = element.pub_date;
  listedArticles.appendChild(publicDate);
  list.appendChild(listedArticles);
});
main.appendChild(list);
}

xhr.open('GET', `${url}/svc/search/v2/articlesearch.json?q=apollo+11+moon&api-key=69f450fbb42b4af38b37f97278591cf6`);
xhr.send();
