angular.module('app').service("FilmeService", function($http, env){
    const urlBase = env.apiUrl;
    const vm = this;
    vm.categoria = "";
    vm.tipo = "";

    let params = {
        api_key: "e2381bd86126e0a731c05b2ead45773e",
        language: "pt-BR",
        region: "BR",
    }

    vm.getFilmes = (pagina) => {
       vm.categoria = "movie";
       vm.tipo = "popular";
       params["page"] = pagina;

        return $http.get(`${urlBase}/${vm.categoria}/${vm.tipo}`,{
            params,
        })
    }

    vm.getFilmesLancamentos = (pagina) => {
        vm.categoria = "movie";
        vm.tipo = "upcoming"
        params["page"] = pagina;
        delete params.region;
         return $http.get(`${urlBase}/${vm.categoria}/${vm.tipo}`,{
             params,
         })
     }

     vm.getFilmePorNome = (nomeFilme, pagina) => {
        params["page"] = pagina;
        if(nomeFilme != ""){
            params["query"] = nomeFilme;
            params["include_adults"] = false;
            vm.categoria = "search";
            vm.tipo = "movie"
        }
         return $http.get(`${urlBase}/${vm.categoria}/${vm.tipo}`,{
             params,
         })
     }
})