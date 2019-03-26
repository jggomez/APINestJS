const Joi = require('joi');

export const coursesSchema =
    Joi.object().keys({
        id: Joi.string().min(3).max(10).required(),
        name: Joi.string().min(3).max(20).required(),
        description: Joi.string().min(3).max(100).required()
    });
