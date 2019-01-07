// dotenv module
require('dotenv').config();
const path = require('path');
// MySQL module
const mysql = require('mysql');
// Express module
const express = require('express');
const app = express();
const PORT = 3000;

app.use('/static', express.static('static'));
app.use(express.json());

// CONFIGURATION
const conn = mysql.createConnection({
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


// CONNECT
conn.connect(err => {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Connected to database', '\n');
});

let getBookQuery = (key, value, queryCount) => {
  let qeryStart = queryCount > 0 ? ' AND' : ' WHERE';
  switch (key) {
    case 'category':
      return `${qeryStart} cate_descrip = '${value}'`;
    case 'publisher':
      return ` ${qeryStart} pub_name = '${value}'`;
    case 'pgt':
      return ` ${qeryStart} book_price > '${value}'`;
    case 'pld':
      return ` ${qeryStart} book_price < '${value}'`;

    default:
      console.log(`error: invalid filter: ${value}`);
      break;
  }
}

app.get('/books', (req, res) => {
  //let sqlNew = 'SELECT * FROM book_mast, author, category, publisher, newpublisher WHERE book_mast.aut_id = author.aut_id AND book_mast.cate_id = category.cate_id AND book_mast.pub_id = publisher.pub_id AND publisher.pub_id = newpublisher.pub_id ORDER BY book_mast.book_id';

  let sqlNew = `SELECT book_name, aut_name, cate_descrip, publisher.pub_name, book_price
  FROM book_mast LEFT OUTER JOIN
  author ON book_mast.aut_id = author.aut_id
  LEFT OUTER JOIN
  category ON book_mast.cate_id = category.cate_id
  LEFT OUTER JOIN
  publisher ON book_mast.pub_id = publisher.pub_id
  LEFT OUTER JOIN
  newpublisher ON book_mast.pub_id = newpublisher.pub_id `;

  let queryCount = 0;

  if (req.query !== undefined) {
    for (let key in req.query) {
      if (req.query.hasOwnProperty(key)) {
        sqlNew += getBookQuery(key, req.query[key], queryCount);
        queryCount++;
      }
    }
  }

  conn.query(sqlNew, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    res.json(data);
  });
});

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));