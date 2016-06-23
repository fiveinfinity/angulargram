function EditController(post, $state, PostService) {
  var ctrl = this;
  ctrl.post = post.data;

  ctrl.updatePost = function() {
    PostService.updatePost(ctrl.post.id, ctrl.post);
    $state.go('home.profile');
  }

  ctrl.delete = function() {
    PostService.deletePost(ctrl.post.id);
    $state.go('home.profile');
  }
}

angular
  .module('app')
  .controller('EditController', EditController);
