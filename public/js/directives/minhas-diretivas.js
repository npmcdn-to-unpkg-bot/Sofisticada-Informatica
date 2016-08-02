angular.module('minhasDiretivas', [])
    .directive('meuPainel', function () {
        var ddo = {};

        ddo.restric = 'AE';
        ddo.scope = {
            nome: '@'            
            
        };
        ddo.transclude = true;

        ddo.templateUrl = 'js/directives/meu-painel.html'



        return ddo;
    })
    .directive('meuproduto', function () {
        var ddo = {};

        ddo.restric = 'AE';
        ddo.scope = {
            nome: '@',
            preco:'@',
            estoque:'@',
            url: '@'
        };
        //ddo.transclude = true;

        //ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{nome}}"></img>';
        ddo.templateUrl = 'js/directives/meu-produto.html'



        return ddo;
    })
    .directive('meuBotao', function () {
        var ddo = {};

        ddo.restric = 'E';
        ddo.scope = {
            nome: '@',
            acao: '&'
        };
        //ddo.transclude = true;

        ddo.template = '<button ng-click="acao(produto)" class="btn btn-warning btn-block">{{nome}}</button>';



        return ddo;
    })
    .directive('meuFocus', function () {

        var ddo = {};

        ddo.restric = 'A';        

        ddo.link = function (scope, element) {
            scope.$on('produtoCadastrada', function () {
                element[0].focus();
            });

        };

        return ddo;
    });