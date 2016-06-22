function CommentService($resource, $http) {
  //???
  this.getComments = function() {
    return $resource('/api/v1/comments.json');
  }

  // ???
  this.getCommentById = function(id) {
    return $resource('/api/v1/comments/'+id+'.json');
  }

  //USED IN POST CONTROLLER TO POST COMMENT.
  this.postComment = function(comment) {
    return $http.post('/api/v1/comments.json', comment)
  }
}

angular
  .module('app')
  .service('CommentService', CommentService);
