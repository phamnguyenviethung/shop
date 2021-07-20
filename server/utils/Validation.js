const Joi = require("joi");

const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
    confirm: Joi.string().valid(Joi.ref("password")).required(),
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(12).email().required(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

const changePasswordValidation = (data) => {
  const schema = Joi.object({
    password: Joi.string().min(6).required(),
    newPassword: Joi.string().min(6).required(),
    confirm: Joi.string().valid(Joi.ref("newPassword")).required(),
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.changePasswordValidation = changePasswordValidation;
