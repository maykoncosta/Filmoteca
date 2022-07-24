angular.module('app')
.component('elencoApp', {
    bindings: {
        elenco: "<",
        urlImg: "<"
    },
    templateUrl: 'shared/component/elenco/elenco.html',
    controller: function(){},
    controllerAs: 'ctrl'
});