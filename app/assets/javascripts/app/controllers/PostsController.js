function PostsController(posts, categories, Auth) {
  var ctrl = this;
  ctrl.posts = posts.data;
  ctrl.categories = categories.data;

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });
}

angular
  .module('app')
  .controller('PostsController', PostsController);
