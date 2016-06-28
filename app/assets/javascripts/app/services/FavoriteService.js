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

  //gets users favorites
  this.getUsersFavorites = function(posts, user) {
    posts = posts.data;
    posts.forEach(function(post) {
      post.favorites.forEach(function(fav) {
        if (fav.user_id !== user.id) {
          post.favorites.splice(fav, 1);
        }
      });
    });
    return posts;
  }
}

angular
  .module('app')
  .service('FavoriteService', FavoriteService);
