angular.module('sofisticada', ['minhasDiretivas', 'ngAnimate', 'ngRoute', 'meusServicos'])
    .config(function ($routeProvider) {

        //$locationProvider.html5Mode(true);

        $routeProvider.when('/produtos', {
            templateUrl: 'partials/principal.html',            
            controller: 'produtosController'
        });

        $routeProvider.when('/produtos/new', {
            templateUrl: 'partials/produto.html',
            controller: 'produtoController'
        });
        

        $routeProvider.when('/produtos/edit/:produtoId', {
            templateUrl: 'partials/produto.html',
            controller: 'produtoController'
        });

        $routeProvider.otherwise({ redirectTo: '/produtos' });
        

    });