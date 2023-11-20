const mongoose = require('mongoose');

const ProdutoSchema = mongoose.Schema({

    nome: {
        type: String,
        required: true
    }, 
    categoria: {
        type: String,
        required: true
    }, 
    local: {
        type: String,
        required: true
    }, 
    codBarras: {
        type: Number,
        required: true
    },     
    qtdeEstoque: {
        type: Number,
        required: true
    }, 
    preco: {
        type: Number,
        required: true
    }, 
    dataCriacao:{
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('Produto', ProdutoSchema);