function PostController(post, Auth, $scope, CommentService) {
  var ctrl = this;
  ctrl.post = post.data;
  ctrl.comment = {};

  $scope.signedIn = Auth.isAuthenticated;
  $scope.logout = Auth.logout;

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

  ctrl.newComment = function() {
    ctrl.comment.post_id = ctrl.post.id;

    CommentService.postComment(ctrl.comment).then(function(comment) {
      ctrl.post.comments.push(comment.data);
    });
    ctrl.comment = {};
  }
}

angular
  .module('app')
  .controller('PostController', PostController);
