angular.module('app')
.controller("DetalhesController", [
    "$stateParams", 
    "FilmeService",
    DetalhesController,
]);

function DetalhesController($stateParams, filmeService){
    const vm = this;
    vm.filme = [];
    vm.creditos = [];
    vm.elenco = [];
    vm.equipeTecnica = [];
    vm.videos = [];
    vm.diretor = "";
    vm.urlYoutube = "https://www.youtube.com/watch?v=";
    vm.filmeId = filmeService.idFilme;
    vm.urlImg = "https://image.tmdb.org/t/p/w500";

    vm.getDetalhesFilme = (filmeId) => {
        filmeService
        .getDetalhesFilme(filmeId)
        .then((response) => {
                vm.filme = response.data;
                console.log(vm.filme);
                vm.getCreditos(filmeId);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    vm.getCreditos = (filmeId) => {
        filmeService
        .getCreditos(filmeId)
        .then((response) => {
            vm.creditos = response.data;
            vm.equipeTecnica = vm.creditos.crew;
            vm.elenco = vm.creditos.cast;
            vm.buscarDiretor();
            vm.getVideos(filmeId);
        })
    }

    vm.getVideos = (filmeId) => {
        filmeService
        .getVideos(filmeId)
        .then((response) => {
            vm.videos = response.data.results;
            console.log(vm.videos)
        })
    }

    vm.buscarDiretor = () => {
        for(var i = 0; i < this.equipeTecnica.length/2; i++){
            if(vm.equipeTecnica[i].job == "Director"){
                vm.diretor = vm.equipeTecnica[i].name;
            }
        }
    }
    vm.teste = () => {
        console.log("filme: ",vm.filmeId);
    }
    vm.teste();
    vm.getDetalhesFilme(vm.filmeId);
}