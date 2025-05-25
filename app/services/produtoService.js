const Produto = require('../models/entity/produto');

const criarProduto = async (produto) => {
    return await Produto.create(produto);
};

module.exports = {
    criarProduto
}