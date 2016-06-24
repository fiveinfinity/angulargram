function favorited() {
  return function(favorites, user_id) {
    favorites.filter(function(fav) {
      return fav.user_id === user_id;
    });
    console.log(favorites);
  }
}

angular
  .module('app')
  .filter('favorited', favorited);
