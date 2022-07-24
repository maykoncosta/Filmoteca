angular.module('app').service("FilmeService", function($http, env){
    const urlBase = env.apiUrl;
    const vm = this;
    vm.categoria = "";
    vm.tipo = "";
    vm.idFilme = 616037;

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

     vm.getFilmePorNome = (pagina, nomeFilme) => {
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

     vm.getDetalhesFilme = (idFilme) => {
        vm.categoria = "movie";
         return $http.get(`${urlBase}/${vm.categoria}/${idFilme}`,{
             params,
         })
     }

     vm.getCreditos = (idFilme) => {
        vm.categoria = "movie";
        vm.tipo = "credits"
         return $http.get(`${urlBase}/${vm.categoria}/${idFilme}/${vm.tipo}`,{
             params,
         })
     }

     vm.getVideos = (idFilme) => {
        vm.categoria = "movie";
        vm.tipo = "videos"
         return $http.get(`${urlBase}/${vm.categoria}/${idFilme}/${vm.tipo}`,{
             params,
         })
     }

     vm.getTopClassificados = (pagina) => {
        vm.categoria = "movie";
        vm.tipo = "top_rated";
        params["page"] = pagina;
 
         return $http.get(`${urlBase}/${vm.categoria}/${vm.tipo}`,{
             params,
         })
     }
})