angular.module('sofisticada').controller('produtoController', function ($scope, cadastroDeproduto, recursoproduto, $routeParams) {
    $scope.produto = {};
    $scope.mensagem = '';

    //RETORNA produto
    if ($routeParams.produtoId) {
        recursoproduto.get({ produtoId: $routeParams.produtoId }, function (produto) {
            $scope.produto = produto;
        }, function (erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível obter o produto';
        });
    }

    $scope.submeter = function () {

        if ($scope.formulario.$valid) {
            cadastroDeproduto.cadastrar($scope.produto)
                .then(function (dados) {
                    $scope.mensagem = dados.mensagem;
                    if (dados.inclusao) $scope.produto = {};

                })
                .cactch(function (dados) {
                    $scope.mensagem = dados.mensagem;
                })
        };

    };

});