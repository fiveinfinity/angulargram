function HomeController($scope, Auth) {

  $scope.signedIn = Auth.isAuthenticated;
  $scope.logout = Auth.logout;

  Auth.currentUser()
    .then(function(user) {
      $scope.user = user;
    });

  $scope.$on('devise:new-registration', function(event, currentUser) {
    $scope.user = currentUser;
  });

  $scope.$on('devise:login', function(event, currentUser) {
    $scope.user = currentUser;
  });

  $scope.$on('devise:logout', function(event, currentUser) {
    $scope.user = {};
  });
}

angular
  .module('app')
  .controller('HomeController', HomeController);
