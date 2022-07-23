angular.module("app").config([
  "$stateProvider",
  "$urlRouterProvider",
  "$httpProvider",
  function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider.state('home', {
      url: "/home",
      templateUrl: "public/home/home.template.html"
    }),
    $stateProvider.state('detalhesFilmes', {
      url: "/filme",
      templateUrl: "public/features/detalhesFilmes/detalhesFilmes.html"
    })
    $urlRouterProvider.otherwise("/home");
  },
]);
