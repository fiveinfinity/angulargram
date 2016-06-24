function FavoriteService($http, PostService) {
  //creates a new favorite
  this.postFavorite = function(post_id) {
    return $http.post('/api/v1/favorites.json', post_id);
  }
  //gets all favorites
  this.getFavorites = function() {
    return $http.get('/api/v1/favorites.json');
  }
  //destroys a favorite
  this.destroyFavorite = function(id) {
    return $http.delete('/api/v1/favorites/'+id+'.json');
  }
  //gets users favorite posts, home.profile
  this.getUsersFavorites = function() {
    ctrl.favorites = this.getFavorites();
    ctrl.posts = PostService.getPosts();
  }
}

angular
  .module('app')
  .service('FavoriteService', FavoriteService);
