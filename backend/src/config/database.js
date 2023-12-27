const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true })

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O valor informado é menor que o limite mínimo."
mongoose.Error.messages.Number.max = "O valor informado é maior que o limite máximo."
mongoose.Error.messages.String.enum = "O valor informado não é válido para o atributo '{PATH}'."