function NewController($http, categories, Auth, $state) {
  var ctrl = this;
  ctrl.post = {};
  ctrl.categories = categories;

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

  ctrl.addHiddenData = function() {
    ctrl.post.user_id = ctrl.user.id;
  }

  ctrl.submit = function() {
    ctrl.addHiddenData();
    $http.post('/api/v1/posts.json', ctrl.post).then(function() {
      $state.go('home.posts');
    });
  }
}

angular
  .module('app')
  .controller('NewController', NewController);
