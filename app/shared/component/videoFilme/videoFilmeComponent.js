angular.module('app')
.component('trailerApp', {
    bindings: {
        urlYoutube: "<",
        temTreiler: "<",
    },
    templateUrl: 'shared/component/videoFilme/videoFIlme.html',
    controller: function(){},
    controllerAs: 'ctrl'
});