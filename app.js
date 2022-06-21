const express = require('express');
const https = require('https')
const res = require('express/lib/response');
const app = express();

app.use((req, res, next) => {
  console.log('time:', Date(Date.now()));
  next();
});

app.get('/', (req, res) => {
  // console.log('hello world');
  res.send('hello world' + req.route);
});
app.param('vasanth', () => {
  console.log('understood, this is used for to get parameters from url');
  next();
});
app.get('/home:id', (req, res) => {
  // console.log('hello world');
  res.send(`welcome home ${req.params.id}`);
});

app.use(express.static('./folder1'));

app.listen(2000, () => {
  console.log('app listening on port 2000');
});
