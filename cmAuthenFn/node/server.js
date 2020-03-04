const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({result: 'I am root folder'});
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
