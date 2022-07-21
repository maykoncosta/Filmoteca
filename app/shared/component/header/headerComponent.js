angular.module('app')
.component('headerApp', {
    bindings: {
        pesquisarFilme: "&",
        nomeFilme: "=",
        getFilmes: "&",
    },
    templateUrl: 'shared/component/header/hearder.html',
    controller: function(){},
    controllerAs: 'ctrl'
});