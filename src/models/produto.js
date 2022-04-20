var mongoose = require('mongoose')
var Schema = mongoose.Schema

var produtoSchema = new Schema({
codigo: {type: String, require: true, unique: true },
nome: { type: String, required: true},
descricao: {type: String},
dataCriada: {type: Date, default: Date.now()}

});

module.exports = mongoose.model('produto', produtoSchema)