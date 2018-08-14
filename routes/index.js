var express = require('express');
var router = express.Router();

/* GET index */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'EberlyWoods' });
});

module.exports = router;
