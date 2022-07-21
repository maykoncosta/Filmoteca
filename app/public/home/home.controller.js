angular.module('app')
.controller("HomeController", [
    "$state", 
    "FilmeService",
    HomeController,
]);

function HomeController($state, filmeService){
    const vm = this;
    vm.filmes = [];
    vm.filmesLancamentos = [];
    vm.urlImg = "https://image.tmdb.org/t/p/w500";
    vm.nomeFilme = "";
    vm.pagina = 1;

vm.getFilmes = () => {
    filmeService
    .getFilmes()
    .then((response) => {
        vm.pagina = 1;
            vm.filmes = response.data.results;
    })
    .catch((error) => {
        console.log(error);
    })
}

vm.getLancamentos = () => {
    filmeService
    .getFilmesLancamentos()
    .then((response) => {
        vm.pagina = 1;
        vm.filmesLancamentos = response.data.results;
        console.log(vm.filmesLancamentos);
    })
    .catch((error) => {
        console.log(error);
    })
}

vm.pesquisarFilme = () => {
    filmeService
    .getFilmePorNome(vm.nomeFilme)
    .then((response) => {
        vm.pagina = 1;
        if(vm.nomeFilme == ""){
            vm.getFilmes(vm.pagina);
        }
        vm.filmes = response.data.results;
    })
    .catch((error) => {
        console.log(error);
    })
}

vm.getProximosFilmes = () => {
    filmeService
    .getFilmes(vm.pagina)
    .then((response) => {
        vm.pagina +=1;
        if(vm.nomeFilme == ""){
            vm.filmes = response.data.results;
            console.log("getProximosFilmes");
        }
        vm.filmes = response.data.results;
    })
    .catch((error) => {
        console.log(error);
    })
}

vm.getFilmes();
vm.getLancamentos();
}