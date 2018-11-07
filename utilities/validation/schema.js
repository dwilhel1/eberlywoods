const Joi = require('joi');

module.exports = Joi.object().keys({
  firstName: Joi.string().min(2).max(20),
  lastName: Joi.string().min(2).max(20),
  emailAddress: Joi.string().email().max(50),
  phoneNumber: Joi.string().max(11),
  contactMessage: Joi.string().max(500),
}).options({ presence: 'required' });
