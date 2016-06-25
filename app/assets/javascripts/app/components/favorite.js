var Favorite = {
  bindings: {
    post: '=',
    user: '='
  },
  templateUrl: 'components/favorite.html',
  controller: function(FavoriteService) {
    var ctrl = this;

    ctrl.getUsersFavorites = function() {
      ctrl.post.favorites.map(function(fav) {
        if (fav.user_id !== ctrl.user.id) {
          ctrl.post.favorites.splice(fav, 1);
        }
      });
      return ctrl.post;
    }

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
    ctrl.getUsersFavorites();
  },
  controllerAs: 'favorite'
}

angular
  .module('app')
  .component('favorite', Favorite);
