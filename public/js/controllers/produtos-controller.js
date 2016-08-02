angular.module('sofisticada').controller('produtosController', function ($scope, recursoproduto) {
    $scope.produtos = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    recursoproduto.query(function (produtos) {
        $scope.produtos = produtos;
        console.log(produtos);
    }, function (erro) {
        console.log(erro);
    });

    /*
    $http.get('v1/produtos')
        .then(function successCallback(response) {
            $scope.produtos = response.data;
        },
        function errorCallback(response) {
            console.log(response);
        });
        */

    //REMOVER    
    $scope.Remover = function (produto) {
        recursoproduto.delete({ produtoId: produto._id }, function () {
            var indiceproduto = $scope.produtos.indexOf(produto);
            $scope.produtos.splice(indiceproduto, 1);
            $scope.mensagem = 'produto ' + produto.nome + ' removido com sucesso.';

        }, function (erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível remover a produto ' + produto.nome;
        });
        /*        
        $http.delete('v1/produtos/'+produto._id)
            .success(function(){
                var indiceproduto = $scope.produtos.indexOf(produto);
                $scope.produtos.splice(indiceproduto,1);
                $scope.mensagem = 'produto '+produto.titulo+' removida com sucesso.';                
                
            })
            .error(function(erro){
                console.log(erro);
                $scope.mensagem = 'Não foi possível remover a produto '+produto.titulo;                
            });
            */
    };

    /*
        $http.get('http://jsonplaceholder.typicode.com/photos')
            .then(function successCallback(response) {
                $scope.produtos = response.data;
            },
            function errorCallback(response) {
                console.log(response);
            });
    */

});