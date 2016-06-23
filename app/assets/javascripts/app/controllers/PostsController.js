function PostsController(posts, categories) {
  var ctrl = this;
  ctrl.categories = categories.data;
  ctrl.posts = posts.data;
}

angular
  .module('app')
  .controller('PostsController', PostsController);
