var http = require('http');
var app  = require('./config/express');
var db   = require('./config/database')('emerson:1903890711@ds042729.mlab.com:42729/sofisticada');

http.createServer(app).listen(2000, function () {
    console.log('Servidor rodando na porta: ' + this.address().port);
});