function ProfileController(posts, user, PostService) {
  var ctrl = this;
  ctrl.user = user;
  ctrl.posts = PostService.getUsersPosts(posts.data, ctrl.user.id);
}

angular
  .module('app')
  .controller('ProfileController', ProfileController);
