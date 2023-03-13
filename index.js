const express = require('express');
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "x-test,Content-Type,Accept,Access-Control-Allow-Headers");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  next();
});

app.get('/result4/', (req, res) => {
  res.set('Content-Type', 'application/json');
  res.send({
    message: 'itmo336203',
    'x-result': req.headers['x-test'],
    'x-body': req.body
  });
});

app.listen(3000, () => console.log('Example app listening on port 3000!')); 