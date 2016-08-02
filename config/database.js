module.exports = function (uri) {

    var mongoose = require('mongoose');

    mongoose.connect('mongodb://' + uri);

    var db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('conectado ao banco');
        // we're connected!
    });

    db.on('disconnected', function () {
        console.log('Desconectado ao MongoDB');
    });

    process.on('SIGINT', function () {
        db.close(function () {
            console.log('Conexão fechada pelo término da aplicação.');
            process.exit(0);
        });
    });

};

