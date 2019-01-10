'use strict'

let backToGameButton = document.querySelector('.backToGame');

backToGameButton.addEventListener('click', (event) => {
  event.preventDefault();
  window.location = 'http://localhost:3000/';
  // let xhr = new XMLHttpRequest();
  // xhr.open('GET', '/');
  // xhr.send();
})

let maintable = document.querySelector('.remove');

let removeData;

// let xhr = new XMLHttpRequest();
// xhr.open('DELETE', '/api/questions/:id')
// xhr.onload = () => {
//   if (xhr.status === 200) {
//     removeData = JSON.parse(xhr.responseText);
//     console.log(removeData);
//   }
// }
// xhr.send();

let allQuestionData;
let allQuestionXhr = new XMLHttpRequest();

allQuestionXhr.open('GET', '/allquestions')
allQuestionXhr.onload = () => {
  if (allQuestionXhr.status === 200) {
    allQuestionData = JSON.parse(allQuestionXhr.responseText);
    console.log(allQuestionData);
    createDelList();
  }
}
allQuestionXhr.send();

let createDelList = () => {
  allQuestionData.forEach(element => {
    let div = document.createElement('div');
    div.id = element.id;
    div.classList.add('removelist');
    
    let question = document.createElement('p');
    question.classList.add('question');
    question.textContent = element.question;
    div.appendChild(question);
    
    let delButton = document.createElement('button');
    delButton.classList.add('delButton');
    delButton.textContent = 'X';
    div.appendChild(delButton);

    maintable.appendChild(div);
  });
  
}
