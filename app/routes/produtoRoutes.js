const express = require('express');
const router = express.Router();
const produtoV1Controller = require('../controllers/v1/produtoController');

router.post('/', produtoV1Controller.criar);
router.put('/:id', produtoV1Controller.atualizar);
router.get('/:id', produtoV1Controller.buscarPorId);

module.exports = router;