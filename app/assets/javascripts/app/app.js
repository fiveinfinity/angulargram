angular.module('app', ['ui.router', 'ngResource', 'templates', 'Devise'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    //HOME BASE
    .state('home', {
      url: '/',
      templateUrl: 'home.html',
      controller: 'HomeController'
    })
    //DEVISE
    .state('home.login', {
      url: 'login',
      templateUrl: 'auth/login.html',
      controller: 'AuthController'
    })
    .state('home.register', {
      url: 'register',
      templateUrl: 'auth/register.html',
      controller: 'AuthController'
    })
    .state('home.posts', {
      url: 'posts',
      templateUrl: 'posts/posts.html',
      controller: 'PostsController as posts',
      resolve: {
        posts: function(PostService) {
          return PostService;
        }
      }
    });
    $urlRouterProvider.otherwise('/');
  });
