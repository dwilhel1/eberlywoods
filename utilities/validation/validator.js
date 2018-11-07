const Joi = require('joi');
const schema = require('./schema');

module.exports = formData => new Promise((resolve, reject) => {
  if (formData) {
    resolve(Joi.validate(formData, schema));
  } else {
    reject(new Error('Cannot validate, missing form data'));
  }
});
