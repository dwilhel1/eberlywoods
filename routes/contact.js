const express = require('express');
const router = express.Router();

/* GET contact */
router.get('/', (req, res, next) => {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
