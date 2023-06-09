import Joi from "joi";

const validateField = Joi.object({
  name: Joi.string(),
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

export default validateField;
