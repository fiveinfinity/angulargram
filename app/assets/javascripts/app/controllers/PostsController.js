function PostsController(posts) {
  var ctrl = this;
  ctrl.data = posts.data;
}

angular
  .module('app')
  .controller('PostsController', PostsController);
