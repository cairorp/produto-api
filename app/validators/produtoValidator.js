const Joi = require('joi');

const produtoValidator = Joi.object({
    nome: Joi.string().min(2).max(50).required()
    .messages({
        'string.base': 'O nome deve ser um texto',
        'string.empty': 'O nome é obrigatório',
        'string.min': 'O nome deve ter no mínimo {#limit} caracteres',
        'string.max': 'O nome deve ter no máximo {#limit} caracteres',
        'any.required': 'O campo nome é obrigatório'
    }),
    preco: Joi.number().positive().required()
    .messages({
        'number.base': 'O preço deve ser um número',
        'number.positive': 'O preço deve ser maior que zero',
        'any.required': 'O campo preço é obrigatório'
    }),
    descricao: Joi.string().allow('', null)
    .messages({
        'string.base': 'A descrição deve ser um texto'
    })
});

module.exports = produtoValidator;