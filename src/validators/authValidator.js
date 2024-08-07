const Joi = require('joi');

const authSchema = Joi.object({
    email: Joi.string().email().required().label("Email"),

    password: Joi.string()
        .min(8)
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/)
        .required()
        .label("Password")
        .messages({
            "string.min": "Password, Must have at least 8 characters",
            "string.pattern.base": "Must include at least one uppercase letter, one lowercase letter, one number, and one special character"
        }),

    name: Joi.string().min(3).max(100).required().label("Full name"),

    username: Joi.string().min(3).max(50).optional().label("Username"),

    experienceLevel: Joi.string().valid('Aspiring engenieer (<1 year)', 'Entry-level (1 year)', 'Mid-level(2-3 years)', 
                         'Experienced (4-5 years)', 'Highly experienced (6-10 years)', 
                         'I\'ve suffered enough (10+ years)', 'I\'m not an engineer').required().label("Experience Level"),    

})
module.exports = {
    authSchema,
};