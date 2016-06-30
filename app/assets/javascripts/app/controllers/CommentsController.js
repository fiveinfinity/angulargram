function CommentsController(comments, user, CommentService, $state) {
  var ctrl = this;
  ctrl.comments = comments.data;
  ctrl.user = user.data;

  ctrl.update = function(id, newContent) {
    var comment = {comment: {content: newContent}};
    CommentService.update(id, comment);
  }

  ctrl.delete = function(comment) {
    CommentService.delete(comment.id).then(function() {
      var destroyedComment = ctrl.comments.indexOf(comment);
      ctrl.comments.splice(destroyedComment, 1);
    });
  }
}

angular
  .module('app')
  .controller('CommentsController', CommentsController);
