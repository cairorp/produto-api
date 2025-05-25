class ProdutoResponse {
  constructor(entity) {
    this.id = entity.IDT_PRODUTO;
    this.nome = entity.NM_PRODUTO;
    this.preco = entity.VLR_PRODUTO;
    this.descricao = entity.DSC_PRODUTO;
  }
}

module.exports = ProdutoResponse;