const express = require('express');
const router = express.Router();

/* GET services */
router.get('/', (req, res, next) => {
  res.render('services', { title: 'Services' });
});

module.exports = router;
