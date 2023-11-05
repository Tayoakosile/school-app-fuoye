import Joi from 'joi';

export const signUpvalidationSchema = Joi.object({
  first_name: Joi.string()
    .required()
    .min(2)
    .max(50)
    .messages({
      'any.required': 'First Name is required',
      'string.empty': 'First Name cannot be empty',
      'string.min': 'First Name should have at least {#limit} characters',
      'string.max': 'First Name should not exceed {#limit} characters',
    }),

  last_name: Joi.string()
    .required()
    .min(2)
    .max(50)
    .messages({
      'any.required': 'Last Name is required',
      'string.empty': 'Last Name cannot be empty',
      'string.min': 'Last Name should have at least {#limit} characters',
      'string.max': 'Last Name should not exceed {#limit} characters',
    }),

  email: Joi.string()
    .required()
    .email({tlds:{allow: true}})
    .messages({
      'any.required': 'Email is required',
      'string.empty': 'Email cannot be empty',
      'string.email': 'Email must be a valid email address',
    }),

  password: Joi.string()
    .required()
    .min(6)
    .messages({
      'any.required': 'Password is required',
      'string.empty': 'Password cannot be empty',
      'string.min': 'Password should have at least {#limit} characters',
    }),

  level: Joi.string()
    .required()
    .messages({
      'any.required': 'Level is required',
      'string.empty': 'Level cannot be empty',
    }),

  department: Joi.string()
    .required()
    .messages({
      'any.required': 'Department is required',
      'string.empty': 'Department cannot be empty',
    }),

  faculty: Joi.string()
    .required()
    .messages({
      'any.required': 'Faculty is required',
      'string.empty': 'Faculty cannot be empty',
    }),
});


