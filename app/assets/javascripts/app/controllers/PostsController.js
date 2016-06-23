function PostsController(posts, categories, FavoriteService) {
  var ctrl = this;
  ctrl.categories = categories.data;
  ctrl.posts = posts.data;

  ctrl.toggleFavorite = function(post_id) {
    FavoriteService.toggleFavorite(post_id);
  }
}

angular
  .module('app')
  .controller('PostsController', PostsController);
