const Joi = require('joi');

//Password Validator

const passwordValidator = (password) => {
  const schema = Joi.object({
    password: Joi.string().min(6).required(),
  });

  return schema.validate({ password });
};

module.exports = {
  passwordValidator,
};
