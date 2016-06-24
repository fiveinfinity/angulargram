var Favorite = {
  bindings: {
    post: '=',
    user: '='
  },
  templateUrl: 'components/favorite.html',
  controller: function(FavoriteService) {
    var ctrl = this;

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
  },
  controllerAs: 'favorite'
}

angular
  .module('app')
  .component('favorite', Favorite);
