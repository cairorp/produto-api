const express = require('express');
const router = express.Router();
const produtoV1Controller = require('../controllers/v1/produtoController');

router.post('/', produtoV1Controller.criarProduto);

module.exports = router;