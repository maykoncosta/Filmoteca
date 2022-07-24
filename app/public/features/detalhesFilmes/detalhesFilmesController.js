angular.module('app')
.controller("DetalhesController", [
    "$sce", 
    "FilmeService",
    DetalhesController,
]);

function DetalhesController($sce, filmeService){
    const vm = this;
    vm.filme = [];
    vm.creditos = [];
    vm.elenco = [];
    vm.equipeTecnica = [];
    vm.videos = [];
    vm.diretor = "";
    vm.concYoutube = "";
    vm.temTreiler = false;
    vm.urlYoutube = "";
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
            if(response.data.results.length != 0){
                vm.videos = response.data.results[0];
                vm.temTreiler = true;
                console.log(response.data.results)
                vm.concatenarUrlDeVideo();
            }
        })
    }

    vm.buscarDiretor = () => {
        for(var i = 0; i < vm.equipeTecnica.length; i++){
            if(vm.equipeTecnica[i].job == "Director"){
                vm.diretor = vm.equipeTecnica[i].name;
            }
        }
    }

    vm.concatenarUrlDeVideo = ()=>{
        vm.concYoutube = "https://www.youtube.com/embed/" + vm.videos.key;
        vm.urlYoutube = $sce.trustAsResourceUrl(vm.concYoutube);
    }


    vm.teste = () => {
        console.log("filme: ",vm.filmeId);
    }
    vm.teste();
    vm.getDetalhesFilme(vm.filmeId);
}