angular.module('app')
.component('paginacaoApp', {
    bindings: {
        getProximosFilmes: "=",
    },
    templateUrl: 'shared/component/paginacao/paginacao.html',
    controller: function(){},
    controllerAs: 'ctrl'
});