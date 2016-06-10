function AuthController($scope, $state, Auth) {

  // var config = {
  //           headers: {
  //               'X-HTTP-Method-Override': 'POST'
  //           }
  //       };


  $scope.login = function() {
    // console.log('inside login');
    Auth.login($scope.user).then(function() {
      $state.go('home');
      console.log('logged in');
    });
  };

  $scope.register = function() {
    Auth.register($scope.user).then(function() {
      $state.go('home');
      console.log('registered');
    });
  };
}

angular
  .module('app')
  .controller('AuthController', AuthController);
