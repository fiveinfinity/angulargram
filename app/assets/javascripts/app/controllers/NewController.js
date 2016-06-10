function NewController(NewPostFactory, $location, Auth, $scope) {
  var ctrl = this;

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

  ctrl.post = new NewPostFactory();

  ctrl.newPost = function() {
      ctrl.post.$save(function() {
      $location.path('home');
    })
  }

}

angular
  .module('app')
  .controller('NewController', NewController);
