function FavoriteService($http) {
  this.toggleFavorite = function(post_id) {
    return $http.post('/api/v1/favorites.json', post_id);
  }
}

angular
  .module('app')
  .service('FavoriteService', FavoriteService);
