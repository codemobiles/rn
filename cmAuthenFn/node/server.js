const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({result: 'I am root folder'});
});

app.get('/login', (req, res) => {
  res.json({result: 'login', detail: req.query});
});

app.listen(3000, () => {
  console.log('Running...');
});
