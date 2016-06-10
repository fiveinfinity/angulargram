function PostController(post) {
  var ctrl = this;
  ctrl.data = post.get();
}

angular
  .module('app')
  .controller('PostController', PostController);
