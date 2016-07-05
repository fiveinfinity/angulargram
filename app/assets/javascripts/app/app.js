angular.module('app', ['ui.router', 'ngResource', 'templates', 'Devise', 'naif.base64', 'ngMessages', 'angular-loading-bar'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
    //HOME BASE- USING ABSTRACT TO RENDER CHILD VIEW IN INDEX.
    .state('home', {
      url: '/',
      abstract: true,
      views: {
        "": {
          templateUrl: 'home.html',
          controller: 'HomeController as home'
        }
      },
      resolve: {
        posts: function(PostService) {
          return PostService.getPosts();
        }
      }
    })
    //DEVISE
    .state('home.login', {
      url: 'login',
      views: {
        'login@home': {
          templateUrl: 'auth/login.html',
          controller: 'AuthController'
        }
      }
    })
    .state('home.register', {
      url: 'register',
      views: {
        'register@home': {
          templateUrl: 'auth/register.html',
          controller: 'AuthController'
        }
      }
    })
    //ALL POSTS
    .state('home.posts', {
      url: '',
      views: {
        "posts@home": {
          templateUrl: 'posts/posts.html',
          controller: 'PostsController as posts'
        }
      },
      resolve: {
        posts: function(PostService) {
          return PostService.getPosts();
        },
        categories: function(CategoryService) {
          return CategoryService.getCategories();
        }
      }
    })
    //SHOW POST
    .state('home.post', {
      url: 'post/:id',
      templateUrl: 'posts/show.html',
      controller: 'PostController as post',
      resolve: {
        post: function($stateParams, PostService) {
          return PostService.getPostById($stateParams.id);
        },
        users: function(UserService) {
          return UserService.getUsers();
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
      templateUrl: 'profile/profile.html',
      controller: 'ProfileController as profile',
      resolve: {
        posts: function(PostService) {
          return PostService.getPosts();
        },
        currentUser: function(Auth) {
          return Auth.currentUser();
        },
        user: function(UserService, $stateParams) {
          return UserService.getUser($stateParams.id)
        }
      }
    })
    //EDIT POST
    .state('home.edit', {
      url: 'posts/edit/:id',
      templateUrl: 'posts/edit.html',
      controller: 'EditController as edit',
      resolve: {
        post: function($stateParams, PostService) {
          return PostService.getPostById($stateParams.id);
        }
      }
    })
    //NEW POST
    .state('home.new', {
      url: 'posts/new',
      templateUrl: 'posts/new.html',
      controller: 'NewController as new',
      resolve: {
        categories: function(CategoryService) {
          return CategoryService.getCategories();
        }
      }
    })
    //USER'S FAVORITES
    .state('home.favorites', {
      url: 'profile/:id/favorites',
      templateUrl: 'profile/favorites.html',
      controller: 'FavoriteController as favorite',
      resolve: {
        posts: function(PostService) {
          return PostService.getPosts();
        },
        user: function(Auth) {
          return Auth.currentUser();
        }
      }
    })
    .state('home.comments', {
      url: 'profile/:id/comments',
      templateUrl: 'profile/comments.html',
      controller: 'CommentsController as comments',
      resolve: {
        comments: function(CommentService) {
          return CommentService.getComments();
        },
        user: function(Auth) {
          return Auth.currentUser();
        }
      }
    });
    $urlRouterProvider.otherwise('/');
  }]);
