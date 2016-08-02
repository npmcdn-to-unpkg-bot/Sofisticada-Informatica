var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var produtoSchema = new Schema({
    nome: {
        type: String,
        require: true
    },
    preco: {
        type: Number,
        require: true
    },
    url: {
        type: String,
        require: false
    },
    estoque: {
        type: Number,
        require: false
    },
    dataAtualizacao: {
        type: Date,
        default: Date.now
    }

});

var produtoModel = mongoose.model('Produto', produtoSchema);
/*

var produto = new produtoModel;

produto.nome    = 'Monitor Samsung 17 polegadas';
produto.preco   = 150;
produto.marca   = 'Samsung';
produto.estoque = 5;

produto.save(function (err,results) {
    if(err){
        console.log(err);
    }
    console.log(results);
});


*/