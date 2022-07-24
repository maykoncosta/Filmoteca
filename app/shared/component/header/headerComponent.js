angular.module('app')
.component('headerApp', {
    bindings: {
        pesquisarFilme: "&",
        nomeFilme: "=",
        getFilmes: "&",
        getMaisClassificados: "&",
    },
    templateUrl: 'shared/component/header/hearder.html',
    controller: function(){},
    controllerAs: 'ctrl'
});