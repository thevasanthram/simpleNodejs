const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // console.log('hello world');
  res.send('hello from load balancer 1');
});

app.listen(3000, () => {
  console.log('app listening on port 3000');
});
