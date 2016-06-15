function PostsController($scope, posts, comments, categories, Auth, SortCommentsService) {
  var ctrl = this;

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

  ctrl.categories = categories;
  //ctrl.data IS POSTS. I KNOW, I KNOW....
  ctrl.data = posts;

  // GETS ALL COMMENTS FOR EACH POST, RETURNS NEW POSTS.
  ctrl.getComments = function() {
    return SortCommentsService.getSortedComments(ctrl.data, comments);
  }

  //REASSIGNING POSTS.
  ctrl.data = ctrl.getComments();
}

angular
  .module('app')
  .controller('PostsController', PostsController);
