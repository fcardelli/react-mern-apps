const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Lista de colunas do Schema Clientes

let Clientes = new Schema({
    nome: {
        type: String
    },
    sobrenome: {
        type: String
    },
    email: {
        type: String
    },
    telefone: {
        type: String
    }
}, {
    collection: 'clientes'
});

module.exports = mongoose.model('Clientes', Clientes);