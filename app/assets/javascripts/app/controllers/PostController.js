function PostController(post, Auth, $scope, CommentService) {
  var ctrl = this;
  ctrl.post = post;
  ctrl.comment = {};

  $scope.signedIn = Auth.isAuthenticated;
  $scope.logout = Auth.logout;

  //CREATES NEW COMMENT, POSTS VIA COMMENT_SERVICE.
  ctrl.newComment = function() {
    //ASSIGNS POST ID TO NEW COMMENT
    ctrl.comment.post_id = ctrl.post.id;

    CommentService.postComment(ctrl.comment).then(function(comment) {
      ctrl.post.comments.push(comment.data);
    });
    //RESETS COMMENT HASH SO THE FORM INPUT (NAME="COMMENT") WILL RESET.
    ctrl.comment = {};
  }
}

angular
  .module('app')
  .controller('PostController', PostController);
