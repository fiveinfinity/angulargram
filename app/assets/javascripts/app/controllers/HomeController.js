function HomeController($scope, Auth) {

  $scope.signedIn = Auth.isAuthenticated;
  $scope.logout = Auth.logout;

  Auth.currentUser()
    .then(function(user) {
      console.log(user);
    });

  $scope.$on('devise:new-registration', function(event, currentUser) {
    $scope.user = currentUser;
  });

  $scope.$on('devise:login', function(event, currentUser) {
    $scope.user = currentUser;
    console.log(currentUser);
  });

  $scope.$on('devise:logout', function(event, currentUser) {
    $scope.user = {};
    console.log('logged out');
  });

  $scope.$on('devise:unauthorized', function(event, xhr, deferred) {
    console.log('unauthorized!');
    $state.go('home');
  });
}

angular
  .module('app')
  .controller('HomeController', HomeController);
