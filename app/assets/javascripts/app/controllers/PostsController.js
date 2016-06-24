function PostsController(posts, categories, FavoriteService, Auth) {
  var ctrl = this;
  ctrl.posts = posts.data;
  ctrl.categories = categories.data;

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

  ctrl.postFavorite = function(post_id, post) {
    FavoriteService.postFavorite(post_id).then(function(favorite) {
      post.post.favorites.push(favorite.data);
    });
  }

  ctrl.destroyFavorite = function(id, post) {
    FavoriteService.destroyFavorite(id).then(function() {
      post.favorites.forEach(function(favorite) {
        if(favorite.id === id) {
          post.favorites.splice(favorite, 1);
        }
      })
    });
  }
}

angular
  .module('app')
  .controller('PostsController', PostsController);
