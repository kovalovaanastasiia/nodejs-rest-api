import Joi from "joi";

const contactsAddSchema = Joi.object({
    name: Joi.string()
        .required()
        .messages({
            "any.required": `"name" must be exist`
        }),
    email: Joi.string()
        .email({minDomainSegments: 2, tlds: {allow: ['com', 'net']}})
        .required()
        .messages({
            "any.required": `"email" must be exist`
        }),
    phone: Joi.string()
        .required()
        .messages({
            "any.required": `"phone" must be exist`
        }),
    favorite: Joi.boolean()
});

const contactUpdateFavoriteSchema = Joi.object({
    favorite: Joi.boolean().required()
})
export default {contactsAddSchema, contactUpdateFavoriteSchema};