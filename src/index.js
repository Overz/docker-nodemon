const express = require('express');
const port = process.env.PORT || '3000';
const host = process.env.HOST || '0.0.0.0';
const public = express.static(__dirname + '/public');

const help = require('../src/js/app');

const app = express();
app.use(public);
app.get('/', (res) => {
  res.sendFile(public);
  console.log('Server is Running.');
});
app.use('/', help);
app.listen(port, host);
