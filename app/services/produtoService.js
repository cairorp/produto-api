const Produto = require('../models/entity/produto');

const criar = async (produto) => {
    return await Produto.create(produto);
};

const buscarPorId = async (id) => {
    return await Produto.findByPk(id);
}

const atualizar = async (id, dados) => {
    const produto = await buscarPorId(id);

    if (!produto)
        return null;

    await produto.update(dados);

    return produto;
};

const excluir = async (id) => {
    const produto = await buscarPorId(id);
    console.log(produto)
    if (!produto)
        return null;

    await produto.destroy();

    return true;
}

module.exports = {
    criar,
    atualizar,
    buscarPorId,
    excluir
};