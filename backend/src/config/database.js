const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true })

mongoose.Error.messages.general.required = "O atributo '{PATH}' e obrigatorio"

mongoose.Error.messages.Number.min =
     "O '{VALUE}' informado e menor que limite minimo de '{MIN}'"
mongoose.Error.messages.Number.max = 
    "O '{VALUE}' informado e menor que limite minimo de '{MAX}'"
mongoose.Error.messages.String.enum = 
    "'{VALUE}' nao e valido para atributo '{PATH}'"