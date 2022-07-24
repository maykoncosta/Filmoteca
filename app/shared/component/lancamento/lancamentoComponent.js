angular.module('app')
.component('lancamentoApp', {
    bindings: {
        detalhesFilme: "=",
    },
    templateUrl: 'shared/component/lancamento/lancamento.html',
    controller: function(){},
    controllerAs: 'ctrl'
});