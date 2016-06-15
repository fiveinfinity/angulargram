function AuthController($scope, $state, Auth) {

  $scope.login = function() {
    Auth.login($scope.user).then(function() {
      $state.go('home.posts');
    });
  };

  $scope.register = function() {
    Auth.register($scope.user).then(function() {
      $state.go('home.posts');
    });
  };
}

angular
  .module('app')
  .controller('AuthController', AuthController);
