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
      controller: 'PostController as post',
      resolve: {
        post: function(PostService) {
          return PostService.getPosts();
        }
      }
    })
    .state('home.post', {
      url: 'post/:id',
      templateUrl: 'posts/post.html',
      controller: 'PostController as post',
      resolve: {
        post: function($stateParams, PostService) {
          return PostService.getPostById($stateParams.id);
        }
      }
    });
    $urlRouterProvider.otherwise('/');
  });
