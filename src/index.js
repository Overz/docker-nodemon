const express = require('express');
const port = process.env.PORT || '3000';
const host = process.env.HOST || '0.0.0.0';
const path = require('path');

const files = path.resolve(__dirname, 'public');
const public = express.static(files);

const help = require('../src/js/app');

const app = express();

app.get('/', (res) => {
  res.sendFile(public);
});

app.use(public);
app.use(help);

app.listen(port, host, () => console.log(`Running on port ${port}`));
