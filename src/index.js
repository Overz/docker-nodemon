const express = require('express');

const port = process.env.port || '3000';
const host = process.env.HOST || '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
  res.send('Hellow World');
});

app.listen(port, host);
