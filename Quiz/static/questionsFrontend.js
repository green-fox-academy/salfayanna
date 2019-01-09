'use strict'

let question = document.querySelector('.question');
let answers = document.querySelector('.answers');
let answer1 = document.querySelector('.answer1');
let answer2 = document.querySelector('.answer2');
let answer3 = document.querySelector('.answer3');
let answer4 = document.querySelector('.answer4');
let score = document.querySelector('.score');
let results = document.querySelector('.results');

let scoreCount = 0;

const xhr = new XMLHttpRequest();
let data = {};
let length = 0;
let questionCounter = 0;
let correct = 0;



let getQuestion = () => {
  xhr.open('GET', './questionlist');
  xhr.onload = () => {
    if (xhr.status === 200) {
      data = JSON.parse(xhr.responseText);
      //length = Object.keys(data).length;
      //console.log(data[0].question);
      question.textContent = data[0].question;


      answer1.textContent = data[0].answer;
      answer1.id = data[0].is_correct;
      answer1.removeAttribute("style"); 
      answer2.textContent = data[1].answer;
      answer2.id = data[1].is_correct;
      answer2.removeAttribute("style"); 
      answer3.textContent = data[2].answer;
      answer3.id = data[2].is_correct;
      answer3.removeAttribute("style"); 
      answer4.textContent = data[3].answer;
      answer4.id = data[3].is_correct;
      answer4.removeAttribute("style"); 
      //console.log(data);
    }
  }
  xhr.send()
}

getQuestion();
console.log(answers);

answers.addEventListener('click', (event)=>{
  event.preventDefault();
  //console.log(event.target);
  //console.log(event.target.id);
  if(event.target.id === '1' && questionCounter <= 10){
    scoreCount++;
    score.textContent = `Score: ${scoreCount}`;
    event.target.style.backgroundColor = "green";
    questionCounter++;
    correct++;
    setTimeout(getQuestion, 1500);     
  } else if(event.target.id !== '1' && questionCounter <= 10){
    event.target.style.backgroundColor = "red";
    questionCounter++;
    setTimeout(getQuestion, 1500);
  }
  
  if(questionCounter === 10){
    results.innerHTML = `You got ${correct}/10`
  }
})