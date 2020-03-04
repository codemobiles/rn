const express = require('express');
const bodyParser = require('body-parser');
const formidable = require('formidable');
const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({result: 'I am root folder'});
});

app.post('/upload', (req, res) => {
  let form = new formidable.IncomingForm();
  form.parse(req, (error, fields, files) => {
    res.json({error, fields, files});
  });
});

app.get('/login', (req, res) => {
  res.json({result: 'login', detail: req.query});
});

app.post('/register', (req, res) => {
  res.json({result: 'register', detail: req.body});
});

app.listen(3000, () => {
  console.log('Running...');
});
