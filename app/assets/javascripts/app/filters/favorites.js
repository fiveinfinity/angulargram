function favorites() {
  return function(posts, user_id) {
    return posts.filter(function(post) {
      if (post.favorites.length !== 0) {
        return post.favorites[0].user_id === user_id;
      }
    });
  }
}

angular
  .module('app')
  .filter('favorites', favorites);
