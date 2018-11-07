const express = require('express');

const router = express.Router();

/* GET index */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'EberlyWoods' });
});

module.exports = router;
