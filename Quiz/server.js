'use strict'

require('dotenv').config();
const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');
const PORT = 3000;

const conn = mysql.createConnection({
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

app.use(express.json());

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

let getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let numbers = [];

app.get('/questionlist', (req, res) => {
  //   let maxNum = 0;
  //   let length = 'SELECT COUNT(id) FROM questions;';
  // conn.query(length, (err, max)=> {
  //   if(err){
  //     console.log(err.message);
  //     return;
  //   }
  //   res.json(max);
  //   maxNum = max;
  //   console.log(max);
  // });

  let questionnumber = getRandomInt(1, 10);
  let findNumber = numbers.find(num => numbers.num === questionnumber);

  if (numbers.length === 10) {
    numbers = [];
  }

  if (!findNumber) {
    numbers.push(questionnumber);
    let sql = `SELECT questions.question, answers.id, answers.answer, answers.is_correct FROM questions, answers WHERE questions.id = (?) AND answers.question_id = (?);`
    conn.query(sql, [questionnumber, questionnumber], (err, data) => {
      if (err) {
        console.log(err.message);
        return;
      }
      res.json(data);
    })
  }
});

app.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname, 'questions.html'));
});


app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});