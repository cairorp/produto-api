const Produto = require('../models/entity/produto');

const criarProduto = async (produto) => {
    console.log('chegou aqui:', Produto)
    return await Produto.create(produto);
};

module.exports = {
    criarProduto
}