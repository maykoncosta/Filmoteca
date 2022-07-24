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
    vm.primeiraPagina = false;
    vm.filmeId;
    vm.topFilmes = false;

vm.getFilmes = () => {
    vm.topFilmes = false;
    vm.pagina = 1;
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
    vm.pagina = 1;
    filmeService
    .getFilmePorNome(vm.pagina, vm.nomeFilme)
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
    vm.pagina +=1;
    if(vm.pagina >= 2){
        vm.primeiraPagina = true;
    }
    if(vm.nomeFilme != ""){
        filmeService
        .getFilmePorNome(vm.pagina, vm.nomeFilme)
        .then((response) => {
            vm.filmes = response.data.results;
        })
        .catch((error) => {
            console.log(error);
        })
    }else if(vm.nomeFilme == ""){
        vm.verificaSeEClassificado();
    }
    
}

vm.getFilmesAnteriores = () => {
    vm.pagina -=1;
    if(vm.pagina == 1){
        vm.primeiraPagina = false;
    }
    if(vm.nomeFilme != ""){
        filmeService
        .getFilmePorNome(vm.pagina, vm.nomeFilme)
        .then((response) => {
            vm.filmes = response.data.results;
        })
        .catch((error) => {
            console.log(error);
        })
    }else if(vm.nomeFilme == ""){
        vm.verificaSeEClassificado();
    }
    
}

vm.verificaSeEClassificado = () => {
    if(vm.topFilmes){
        filmeService
        .getTopClassificados(vm.pagina)
        .then((response) => {
            vm.filmes = response.data.results;
        })
        .catch((error) => {
            console.log(error);
        })
    }else{
        console.log(vm.topFIlmes);
        filmeService
        .getFilmes(vm.pagina)
        .then((response) => {
            vm.filmes = response.data.results;
        })
        .catch((error) => {
            console.log(error);
        })
    }
}

vm.getMaisClassificados = () => {
    vm.topFilmes = true;
    vm.pagina = 1;
    filmeService
    .getTopClassificados(vm.pagina)
    .then((response) => {
        vm.filmes = response.data.results;
    })
    .catch((error) => {
        console.log(error);
    })
}


vm.detalhesFilme = (filme) =>{
    vm.filmeId = filme.id;
    filmeService.idFilme = vm.filmeId;
    $state.go('detalhesFilmes', {filmeId: vm.filmeId});
}

vm.getFilmes();
vm.getLancamentos();
}