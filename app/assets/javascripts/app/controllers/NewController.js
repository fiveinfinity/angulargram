function NewController(categories, Auth, $state, PostService) {
  var ctrl = this;
  ctrl.post = {};
  ctrl.categories = categories.data;

  //transition not smooth from success to redirect
  ctrl.submit = function() {
    PostService.newPost(ctrl.post).success(function() {
      $state.go('home.posts');
    });
  }
}

angular
  .module('app')
  .controller('NewController', NewController);
