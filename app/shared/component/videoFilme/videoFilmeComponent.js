angular.module('app')
.component('trailerApp', {
    bindings: {
        urlYoutube: "<",
    },
    templateUrl: 'shared/component/videoFilme/videoFIlme.html',
    controller: function(){},
    controllerAs: 'ctrl'
});