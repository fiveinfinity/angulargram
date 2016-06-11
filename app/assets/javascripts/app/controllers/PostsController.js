function PostsController(posts) {
  var ctrl = this;

  posts.query({}, function(data) {
    ctrl.data = data;
  });
}

angular
  .module('app')
  .controller('PostsController', PostsController);
