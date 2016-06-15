function CommentService($resource) {
  this.getComments = function() {
    return $resource('/api/v1/comments.json');
  }

  this.getCommentById = function(id) {
    return $resource('/api/v1/comments/'+id+'.json');
  }
}

angular
  .module('app')
  .service('CommentService', CommentService);
