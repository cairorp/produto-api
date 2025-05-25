const ProdutoResponse = require('../../models/dto/produtoResponse');
const produtoService = require('../../services/produtoService');

exports.criarProduto = async (req, res) => {
    try {
        const novoProduto = {
            NM_PRODUTO: req.body.nome,
            VLR_PRODUTO: req.body.preco,
            DSC_PRODUTO: req.body.descricao,
            DTH_CRIACAO: new Date(),
            NM_USUARIO_CRIACAO: 'Admin'
        };

        const produto = await produtoService.criarProduto(novoProduto);

        res.status(201).json(new ProdutoResponse(produto));
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}