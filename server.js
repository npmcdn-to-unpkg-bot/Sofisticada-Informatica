var http = require('http');
var app  = require('./config/express');
var db   = require('./config/database')('localhost/sofisticada');

http.createServer(app).listen(2000, function () {
    console.log('Servidor rodando na porta: ' + this.address().port);
});