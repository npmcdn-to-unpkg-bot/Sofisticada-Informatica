var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');
//var routes = require('../app/routes');
//-------------------

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//routes(app);


consign({ cwd: 'app' })
    .include('models')
    .then('api')
    .then('routes')
    .into(app); 

//-------------------
module.exports = app;