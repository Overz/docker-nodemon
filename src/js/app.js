const express = require('express');

const router = express.Router();

router.get('/help', (req, res) => {
  res.send('This is Help Router');
});

module.exports = router;
