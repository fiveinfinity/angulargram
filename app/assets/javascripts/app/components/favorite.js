var Favorite = {
  bindings: {
    post: '=',
    user: '='
  },
  template: '<ng-include src="templateUrl()"/>',
  controller: function(FavoriteService, $scope) {
    var ctrl = this;
    $scope.templateUrl = function() {
      console.log(ctrl.user)
      if (ctrl.post.user_id === ctrl.user.id) {
        return '<b>favorited!!</b>';
      } else {
        return '<b>not a favorite.</b>';
      }
    }

    // ctrl.post = FavoriteService.getUsersFavorites(post, user);
  }
}

angular
  .module('app')
  .component('favorite', Favorite);
