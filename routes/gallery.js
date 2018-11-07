const express = require('express');

const router = express.Router();

/* GET gallery */
router.get('/', (req, res, next) => {
  res.render('gallery', { title: 'Gallery' });
});

module.exports = router;
