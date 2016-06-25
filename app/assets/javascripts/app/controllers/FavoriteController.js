function FavoriteController(posts, user, FavoriteService) {
  var ctrl = this;
  ctrl.user = user;

  ctrl.getUsersFavorites = function() {
    ctrl.posts = posts.data;
    return ctrl.posts.forEach(function(post) {
      post.favorites.forEach(function(fav) {
        if (fav.user_id !== ctrl.user.id) {
          post.favorites.splice(fav, 1);
        }
      });
    });
  }

  ctrl.getUsersFavorites();
}

angular
  .module('app')
  .controller('FavoriteController', FavoriteController);
