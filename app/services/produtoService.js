const Produto = require('../models/entity/produto');
const { Op } = require('sequelize');

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

const listarPaginado = async (page, limit, filtro = {}) => {
    const offset = (page - 1) * limit;

    const where = {};

    if (filtro.nome)
        where.NM_PRODUTO = { [Op.iLike]: `%${filtro.nome}%`};
    if (filtro.descricao)
        where.DSC_PRODUTO = { [Op.iLike]: `%${filtro.descricao}%`};
    if (filtro.preco) {
        where.VLR_PRODUTO = parseFloat(filtro.preco);
    } else {
        if (filtro.precoMin)
            where.VLR_PRODUTO = { ...(where.VLR_PRODUTO || {}), [Op.gte]: parseFloat(filtro.precoMin)};
        if (filtro.precoMax)
            where.VLR_PRODUTO = { ...(where.VLR_PRODUTO || {}), [Op.lte]: parseFloat(filtro.precoMax)};
    }

    const { count, rows } = await Produto.findAndCountAll({
        where,
        limit,
        offset,
        order: [['DTH_CRIACAO', 'DESC']]
    });

    return { total: count, produtos: rows };
}

module.exports = {
    criar,
    atualizar,
    buscarPorId,
    excluir,
    listarPaginado
};