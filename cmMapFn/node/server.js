const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const position = require('./model_position');

// http://localhost:3000/record_position
// {"lat": "123", "lng": "5555"}
app.use(bodyParser.json());

app.post('/record_position', async (req, res) => {
  console.log(JSON.stringify(req.body));
  await position.create(req.body);
  res.json({result: 'ok', message: req.body});
});

app.get('/position', async (req, res) => {
  let result = await position.findAll();
  res.json(result);
});

app.listen(3000, () => {
  console.log('Ready..');
});
