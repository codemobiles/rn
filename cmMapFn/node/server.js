const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// http://localhost:3000/record_position
// {"lat": "123", "lng": "5555"}
app.use(bodyParser.json());

app.post('/record_position', (req, res) => {
  console.log(JSON.stringify(req.body));
  res.json({result: 'ok', message: req.body});
});

app.listen(3000, () => {
  console.log('Ready..');
});
