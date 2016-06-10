function NewController(NewPostFactory, $location, Auth, $scope, $http) {
  var ctrl = this;

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

  ctrl.post = new NewPostFactory();

  ctrl.newPost = function() {
      ctrl.post.$save(function() {
      $location.path('posts');
    })
  }
  //
  // $scope.uploadFile = function(files) {
  //   var fd = new FormData();
  //   //Take the first selected file
  //   fd.append("file", files[0]);
  //
  //   console.log(fd);
  //
  //   $http.post('url', fd, {
  //       withCredentials: true,
  //       headers: {'Content-Type': undefined },
  //       transformRequest: angular.identity
  //   }).success( function() { console.log('success') } ).error( function() { console.log('error') } );

// };

}

angular
  .module('app')
  .controller('NewController', NewController);
