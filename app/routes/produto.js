//var api = require('../api/produto');

module.exports = function (app) {

    var api = app.api.produto;

    app.route('/v1/produtos')
        .get(api.lista)
        .post(api.adiciona);

    app.route('/v1/produtos/:id')
        .get(api.buscaPorId)
        .delete(api.removePorId)
        .put(api.atualiza);
   
};
