module.exports = class ProdutoRequest {
    constructor({ nome, preco, descricao }) {
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
    }
}