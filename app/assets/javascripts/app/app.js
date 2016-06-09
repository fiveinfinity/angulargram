angular.module('app', ['ui.router', 'ngResource', 'templates', 'Devise'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html',
      controller: 'HomeController as ctrl'
    })
    .state('home.login', {
      url: 'login',
      templateUrl: 'auth/login.html',
      controller: 'AuthController'
    })
    .state('home.register', {
      url: 'register',
      templateUrl: 'auth/register.html',
      controller: 'AuthController'
    });
    $urlRouterProvider.otherwise('/');
  });
