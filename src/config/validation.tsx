import Joi from 'joi';

export const signUpvalidationSchema = Joi.object({
  first_name: Joi.string()
    .required()
    .min(2)
    .max(50)
    .messages({
      'any.required': 'First Name is required',
      'string.empty': 'This is required',
      'string.min': 'First Name should have at least {#limit} characters',
      'string.max': 'First Name should not exceed {#limit} characters',
    }),
  phone: Joi.number()
    .required()
    .min(8)
    .messages({
      'any.required': 'Your Phone is required',
      'number.empty': 'This field cannot be empty',
      'number.min': 'This field should be up to at least {#limit} characters',
      
    }),

  last_name: Joi.string()
    .required()
    .min(2)
    .max(50)
    .messages({
      'any.required': 'Last Name is required',
      'string.empty': 'This field is required',
      'string.min': 'Last Name should have at least {#limit} characters',
      'string.max': 'Last Name should not exceed {#limit} characters',
    }),

  email: Joi.string()
    .required()
    .email({tlds:{allow: false}})
    .messages({
      'any.required': 'This field is required',
      'string.empty': 'This field is required',
      'string.email': 'Email must be a valid email address',
    }),

  password: Joi.string()
    .required()
    .min(6)
    .messages({
      'any.required': 'This field is required',
      'string.empty': 'This field is required',
      'string.min': 'Password should have at least {#limit} characters',
    }),

  
      faculty: Joi.object().required().messages({
            "any.required": `Please choose a Faculty`,
            "object.base": `Please choose a Faculty`,

        }),
      level: Joi.object().required().messages({
            "any.required": `Please choose a level`,
            "object.base": `Please choose a level`,

        }),
        department: Joi.object().required().messages({
            "any.required": `Please choose a Department`,
            "object.base": `Please choose a Department`,
        }),

 
});
export const profileValidationSchema = Joi.object({
  first_name: Joi.string()
    .required()
    .min(2)
    .max(50)
    .messages({
      'any.required': 'First Name is required',
      'string.empty': 'This is required',
      'string.min': 'First Name should have at least {#limit} characters',
      'string.max': 'First Name should not exceed {#limit} characters',
    }),
  phone: Joi.number()
    .required()
    .min(8)
    .messages({
      'any.required': 'Your Phone is required',
      'number.empty': 'This field cannot be empty',
      'number.min': 'This field should be up to at least {#limit} characters',
      
    }),

  last_name: Joi.string()
    .required()
    .min(2)
    .max(50)
    .messages({
      'any.required': 'Last Name is required',
      'string.empty': 'This field is required',
      'string.min': 'Last Name should have at least {#limit} characters',
      'string.max': 'Last Name should not exceed {#limit} characters',
    }),

  email: Joi.string()
    .required()
    .email({tlds:{allow: false}})
    .messages({
      'any.required': 'This field is required',
      'string.empty': 'This field is required',
      'string.email': 'Email must be a valid email address',
    }),

  

  
      faculty: Joi.object().required().messages({
            "any.required": `Please choose a Faculty`,
            "object.base": `Please choose a Faculty`,

        }),
      level: Joi.object().required().messages({
            "any.required": `Please choose a level`,
            "object.base": `Please choose a level`,

        }),
        department: Joi.object().required().messages({
            "any.required": `Please choose a Department`,
            "object.base": `Please choose a Department`,
        }),

 
});

export const loginValidationSchema = Joi.object({
  
  email: Joi.string()
  .required()
  .email({tlds:{allow: false}})
  .messages({
    'any.required': 'Email is required',
    'string.empty': 'Email cannot be empty',
    'string.email': 'Email must be a valid email address',
  }),
  password: Joi.string()
    .required()
    .messages({
      'any.required': 'Password is required',
      'string.empty': 'Password cannot be empty',
    }),

})
