function ProfileController(posts, Auth, PostService) {
  var ctrl = this;

  //CALLING CTRL.POSTS INSIDE OF AUTH INSURES CTRL.USER.ID IS NOT UNDEFINED
  Auth.currentUser().then(function(user) {
    ctrl.user = user;
    ctrl.posts = PostService.getUsersPosts(posts.data, ctrl.user.id);
  });
}

angular
  .module('app')
  .controller('ProfileController', ProfileController);
