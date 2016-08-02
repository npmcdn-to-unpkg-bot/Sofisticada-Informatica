var mongoose = require('mongoose');

var api = {};
var model = mongoose.model('Produto');

//LISTA PRODUTOS
api.lista = function (req, res) {

    model.find({})
        .then(function (produtos) {
            res.json(produtos);
        }, function (error) {
            res.sendStatus(500).json(error);
        });

};

//ADICIONA PRODUTO
api.adiciona = function (req, res) {
    var produto = req.body;
    model.create(produto)
        .then(function (produto) {
            res.json(produto);
        }, function (error) {
            res.sendStatus(500).json(error);
        });
};

//BUSCA PRODUTO
api.buscaPorId = function (req, res) {
    model.findById(req.params.id)
        .then(function (produto) {
            if (!produto) throw Error('Produto não encontrado!');
            res.json(produto);
        }, function (error) {
            console.log(error);
            res.sendStatus(500).json(error);
        });
};

//DELETA PRODUTO
api.removePorId = function (req, res) {

    model.remove({ _id: req.params.id })
        .then(function (produto) {
            res.sendStatus(204);
        }, function (error) {
            console.log(error);
            res.sendStatus(500).json(error);
        });

};

//ATUALIZA PRODUTO
api.atualiza = function (req, res) {

    model.findByIdAndUpdate(req.params.id, req.body)
        .then(function (produto) {
            res.sendStatus(204);
        }, function (error) {
            console.log(error);
            res.sendStatus(500).json(error);
        });
};

module.exports = api;