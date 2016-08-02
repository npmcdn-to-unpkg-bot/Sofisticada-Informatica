angular.module('meusServicos', ['ngResource'])
    .factory('recursoproduto', function ($resource) {
        console.log('recursoproduto');
        return $resource('v1/produtos/:produtoId', null, {
            update: {
                method: 'PUT'
            }
        });
    })
    .factory('cadastroDeproduto', function (recursoproduto, $q, $rootScope) {
        var servico = {};

        servico.cadastrar = function (produto) {
            return $q(function (resolve, reject) {
                if (produto._id) {

                    recursoproduto.update({ produtoId: produto._id }, produto, function () {
                        $rootScope.$broadcast('produtoCadastrada');
                        resolve({
                            mensagem: 'produto '+produto.nome+' atualizado com sucesso!',
                            incusao : false
                            
                        });
                    }, function (erro) {
                        console.log(erro);
                        reject({
                            mensagem:'Não foi possível alterar o produto '+ produto.titulo
                        });
                    });

                } else {
                    recursoproduto.save(produto,function(){
                        $rootScope.$broadcast('produtoCadastrada');
                        resolve({
                           mensagem : 'produto '+produto.nome+' incluído com sucesso!',
                           inclusao : true 
                        });
                    },function(erro){
                        console.log(erro);
                        reject({
                           mensagem : 'Não foi possível incluir o produto '+ produto.nome 
                        });
                    });
                }

            });
        };

        return servico;
    });