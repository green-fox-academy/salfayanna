'use strict'

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8080;

app.use('/assets', express.static('assets'));
app.use(bodyParser());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  if (req.query.input) {
    res.send({
      "received": req.query.input,
      "result": req.query.input * 2
    })
  } else {
    res.send({
      "error": "Please provide an input!"
    })
  };
});

app.get('/greeter', (req, res) => {
  if (req.query.name && req.query.title) {
    res.send({
      "welcome_message": `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
    })
  } else if (req.query.name) {
    res.send({
      "error": "Please provide a title!"
    })
  } else {
    res.send({
      "error": "Please provide a name!"
    })
  };
});

app.get('/appenda/:appendable', (req, res) => {
  const { appendable } = req.params;
  if (appendable) {
    res.json({ 'appended': `${appendable}a` });
  }
});

app.get('/appenda', (req, res) => {
  res.status(404).send();
});

app.post('/dountil/:action', (req, res) => {
  const{action} = req.params
  if (action === 'sum') {
    res.json({
      "result": sum(req.body.until)
    });
  } else if (action === 'factor') {
    res.json({
      "result": factor(req.body.until)
    });
  } else {
    res.json({
      "error": "Please provide a number!"
    });
  }
})


let sum = (number) => {
  if (number === 0 || number === 1)
  return 1;
for (let i = number - 1; i >= 1; i--) {
  number += i;
}
return number;
}

let factor = (number) => {
  if (number === 0 || number === 1)
    return 1;
  for (let i = number - 1; i >= 1; i--) {
    number *= i;
  }
  return number;
}

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});