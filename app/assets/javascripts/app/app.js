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
    //ALL POSTS
    .state('home.posts', {
      url: '/',
      templateUrl: 'posts/posts.html',
      controller: 'PostsController as posts',
      resolve: {
        posts: function(PostService) {
          return PostService.getPosts();
        },
        comments: function(CommentService) {
          return CommentService.getComments();
        },
        categories: function(CategoryService) {
          return CategoryService.getCategories();
        }
      }
    })
    //SHOW POST
    .state('home.post', {
      url: 'post/:id',
      templateUrl: 'posts/post.html',
      controller: 'PostController as post',
      resolve: {
        post: function($stateParams, PostService) {
          return PostService.getPostById($stateParams.id);
        },
        comments: function(CommentService) {
          return CommentService.getComments();
        }
      }
    })
    //SHOW CATEGORY
    .state('home.category', {
      url: 'category/:id',
      templateUrl: 'category/show.html',
      controller: 'CategoryController as category',
      resolve: {
        category: function($stateParams, CategoryService) {
          return CategoryService.getCategoryById($stateParams.id);
        }
      }
    })
    //PROFILE
    .state('home.profile', {
      url: 'profile/:id',
      templateUrl: 'profile.html',
      controller: 'ProfileController as profile',
      resolve: {
        posts: function($stateParams, PostService) {
          return PostService.getPosts();
        }
      }
    })
    //EDIT POST
    .state('home.edit', {
      url: 'posts/edit/:id',
      templateUrl: 'posts/edit.html',
      controller: 'EditController as edit',
      // resolve: {
      //   post: function($stateParams, PostService) {
      //     return PostService.getPostById($stateParams.id);
      //   }
      // }
    });
    $urlRouterProvider.otherwise('/');
  });
