angular.module('app')
.component('paginacaoApp', {
    bindings: {
        getProximosFilmes: "&",
        getFilmesAnteriores: "&",
        primeiraPagina: "=",
    },
    templateUrl: 'shared/component/paginacao/paginacao.html',
    controller: function(){},
    controllerAs: 'ctrl'
});