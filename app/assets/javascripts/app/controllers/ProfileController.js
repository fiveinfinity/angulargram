function ProfileController(posts, currentUser, user, PostService) {
  var ctrl = this;
  ctrl.currentUser = currentUser;
  ctrl.user = user.data;
  ctrl.posts = PostService.getUsersPosts(posts.data, ctrl.user.id);
}

angular
  .module('app')
  .controller('ProfileController', ProfileController);
