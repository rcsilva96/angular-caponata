// Rotas para o produto

const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController')
const Produto = require('../models/Produto')

// api/produtos

router.post('/', produtoController.criarProduto);
router.get('/', produtoController.obterProdutos);
router.put('/:id', produtoController.atualizarProdutos);
router.get('/:id', produtoController.obterProduto);
router.delete('/:id', produtoController.deletarProduto);

// Buscar produto por código de barras

router.get('/buscar-por-codigo/:codBarras', async (req, res) => {
    try {
      const codBarras = req.params.codBarras;
      const produto = await Produto.findOne({ codBarras }); // Use o método adequado para buscar no banco de dados
  
      if (!produto) {
        return res.status(404).json({ message: 'Produto não encontrado' });
      }
  
      res.status(200).json(produto);
    } catch (error) {
      console.error('Erro ao buscar produto:', error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  });

  // Rota para concluir a venda
  
router.put('/concluir-venda/:id', async (req, res) => {
  try {
    const produto = await Produto.findById(req.params.id);

    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado.' });
    }
    produto.qtdeEstoque -= req.body.qtdeVendida;
    produto.qtdeVendida = req.body.qtdeVendida;

    await produto.save();

    res.json({ message: 'Venda concluída com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao concluir a venda.', error });
  }
});

module.exports = router;