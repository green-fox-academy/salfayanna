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

let rowCount = 0;
let length = 'SELECT COUNT(id) FROM questions;';
conn.query(length, (err, max) => {
  if (err) {
    console.log(err.message);
    return;
  }

  rowCount = (Object.values(max[0])[0]);
});

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

  let questionNumber = 0;

  do {
    questionNumber = getRandomInt(1, rowCount);
  } while (numbers.includes(questionNumber))

  let findNumber = numbers.includes(questionNumber);
  console.log(findNumber);

  if (numbers.length === rowCount) {
    numbers = [];
  }

  if (!findNumber) {
    numbers.push(questionNumber);
    let sql = `SELECT questions.question, answers.id, answers.answer, answers.is_correct FROM questions, answers WHERE questions.id = (?) AND answers.question_id = (?);`
    conn.query(sql, [questionNumber, questionNumber], (err, data) => {
      if (err) {
        console.log(err.message);
        return;
      }
      res.json(data);
    })
  }
});

app.get('/game', (req, res) => {
  numbers = [];
  res.sendFile(path.join(__dirname, 'questions.html'));
});

app.get('/questions', (req, res) => {
  res.sendFile(path.join(__dirname, 'managequestion.html'));
});

app.get('/allquestions', (req, res) => {
  //let sql = 'SELECT * FROM quizdata.questions LEFT OUTER JOIN quizdata.answers ON quizdata.questions.id = quizdata.answers.question_id;';
  let sql = 'select * FROM questions;'
  conn.query(sql, (err, questions) => {
    if (err) {
      console.log(err.message);
      return;
    }
    res.json(questions);
  })
});

app.post('/api/questions', (req, res) => {
  let { question, answer1, answer2, answer3, answer4, isCorrect } = req.body;
  let questionInsertSql = `INSERT INTO questions (question) VALUES (?);`;

  conn.query(questionInsertSql, [question], (err, data) => {
    if (err) {
      console.log(err.message);
      return;
    }
    res.json(data);
  })

  let answerInsertSql = `INSERT INTO answers (answer, iscorrect) VALUES (?, ?), (?, ?), (?, ?), (?, ?);`

  conn.query(answerInsertSql, [data.insertId, answer1, data.insertId, answer2, data.insertId, answer3, data.insertId, answer4], (err, answerData) => {
    if (err) {
      console.log(err.message);
      return;
    }
    res.status(200).json({ message: 'Succesfully added to database' });
  })
})

app.delete('/api/questions/:id', (req, res) => {
  let { id } = req.params;
  // let deleteId = 'SELECT * FROM questions;';

  // conn.query(deleteId, (err, deleteResponse) => {
  //   if (err) {
  //     console.log(err.message);
  //     return;
  //   }

  //   let idChecker = deleteResponse.find(resData => resData.id === `${id}`);

  //   if (!idChecker) {
  //     res.status(404).json({
  //       error: "Id not found"
  //     });
  //     return;
  //   } else {
      let deleteREQ = 'DELETE FROM questions WHERE id = (?);'

      conn.query(deleteREQ, [id], (err, delRes) => {
        if (err) {
          console.log(err.message);
          return;
        } else {
          res.status(204).json({
            message: 'Successfully deleted'
          })
        }
      })

      let deleteREQAnswer = 'DELETE FROM answers WHERE question_id = (?);'

      conn.query(deleteREQAnswer, [id], (err, delRes) => {
        if (err) {
          console.log(err.message);
          return;
        } else {
          res.status(204).json({
            message: 'Successfully deleted'
          })
        }
      })

    }
  )
//})

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});