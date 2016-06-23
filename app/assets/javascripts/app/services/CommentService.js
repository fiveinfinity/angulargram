function CommentService($http) {
  //home.post
  this.postComment = function(comment) {
    return $http.post('/api/v1/comments.json', comment)
  }
}

angular
  .module('app')
  .service('CommentService', CommentService);
