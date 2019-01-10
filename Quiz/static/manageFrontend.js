'use strict'

let form = document.querySelector('form');

let backToGameButton = document.querySelector('.backToGame');

backToGameButton.addEventListener('click', (event) => {
  event.preventDefault();
  window.location = 'http://localhost:3000/';
})

let maintable = document.querySelector('.remove');


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
    delButton.id = element.id;
    delButton.textContent = 'X';

    delButton.addEventListener('click', (event) => {
      console.log(event.target.id);
      let xhr = new XMLHttpRequest();
      xhr.open('DELETE', `/api/questions/${event.target.id}`)
      xhr.onload = () => {
        if (xhr.status === 200) {
          let removeData = JSON.parse(xhr.responseText);
          console.log(removeData);
        }
      }
      xhr.send();

    });

    div.appendChild(delButton);

    maintable.appendChild(div);
  });

}

form.onsubmit = (event) => {
  event.preventDefault();
  const { thequestion, answer1, answer2, answer3, answer4, correctanswer} = form.elements;

  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/api/questions');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
    thequestion: thequestion.value,
    answer1: answer1.value,
    answer2: answer2.value,
    answer3: answer3.value,
    answer4: answer4.value,
    correctanswer: correctanswer.value
  }));

  xhr.onload = () => {
    const res = JSON.parse(xhr.responseText);
    console.log(res);
  }
}



// submitButton.addEventListener('submit', (event)=> {
//   let postXHR = new XMLHttpRequest();

//   postXHR.open('POST', '/api/questions');
//   postXHR.setRequestHeader('Content-Type', 'application/json');
//   postXHR.send(JSON.stringify({

//   }));


//})


