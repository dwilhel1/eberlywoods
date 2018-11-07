const express = require('express');
const validator = require('../utilities/validation/validator');

const router = express.Router();

/* GET contact page */
router.get('/', (req, res, next) => {
  res.render('contact', { title: 'Contact Us' });
});

/* POST from contact page */
router.post('/', (req, res, next) => {
  validator(req.body).then((validationResult) => {
    res.send(validationResult);
  }).catch((validationError) => {
    res.status(500).send(validationError);
  });
});

module.exports = router;
