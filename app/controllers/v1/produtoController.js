const ProdutoResponse = require('../../models/dto/produtoResponse');
const produtoService = require('../../services/produtoService');
const produtoValidator = require('../../validators/produtoValidator');

exports.criar = async (req, res) => {
    try {
        const { error, value } = produtoValidator.validate(req.body, {abortEarly: false});

        if (error) 
            return res.status(400).json({
                error: 'Erro de validação',
                detalhes: error.details.map(d => d.message)
            });

        const novoProduto = {
            NM_PRODUTO: req.body.nome,
            VLR_PRODUTO: req.body.preco,
            DSC_PRODUTO: req.body.descricao,
            DTH_CRIACAO: new Date(),
            NM_USUARIO_CRIACAO: 'Criação'
        };

        const produto = await produtoService.criar(novoProduto);

        res.status(201).json(new ProdutoResponse(produto));
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

exports.atualizar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const { error, value } = produtoValidator.validate(req.body, {abortEarly: false});

        if (error) 
            return res.status(400).json({
                error: 'Erro de validação',
                detalhes: error.details.map(d => d.message)
            });


        const produtoAtualizado = await produtoService.atualizar(id, {
            NM_PRODUTO: req.body.nome,
            VLR_PRODUTO: req.body.preco,
            DSC_PRODUTO: req.body.descricao,
            DTH_ALTERACAO: new Date(),
            NM_USUARIO_ALTERACAO: 'Alteracao'
        });
        
        if (!produtoAtualizado)
            return res.status(404).json({ error: 'Produto não encontrado'});

        res.status(200).json(new ProdutoResponse(produtoAtualizado));
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: err.message });
    }
}

exports.buscarPorId = async (req, res) => {
    const id = parseInt(req.params.id);

    const produto = await produtoService.buscarPorId(id);

    if (!produto)
        return res.status(404).json({ error: 'Produto não encontrado'});

    return res.status(200).json(new ProdutoResponse(produto));
}

exports.deletar = async (req, res) => {
    const id = parseInt(req.params.id);

    const excluido = await produtoService.excluir(id);

    if (!excluido)
        return res.status(404).json({ error: 'Produto não encontrado'});

    return res.status(200).json({ message: 'Produto excluido com sucesso'});
}

exports.buscarPorFiltro = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const size = parseInt(req.query.size) || 10;

        const filtros = {
            nome: req.query.nome,
            precoMin: req.query.precoMin,
            precoMax: req.query.precoMax,
            preco: req.query.preco,
            descricao: req.query.descricao
        };

        const pagina = await produtoService.listarPaginado(page, size, filtros);

        return res.json({
            total: pagina.total,
            page: page,
            size: size,
            data: pagina.produtos.map(prod => new ProdutoResponse(prod))
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}