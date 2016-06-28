function FavoriteController(posts, user, FavoriteService) {
  var ctrl = this;
  ctrl.user = user;
  ctrl.posts = FavoriteService.getUsersFavorites(posts, ctrl.user);
}

angular
  .module('app')
  .controller('FavoriteController', FavoriteController);
