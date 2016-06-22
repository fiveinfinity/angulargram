function PostsController(posts, categories) {
  var ctrl = this;
  ctrl.categories = categories;
  ctrl.posts = posts;
}

angular
  .module('app')
  .controller('PostsController', PostsController);
