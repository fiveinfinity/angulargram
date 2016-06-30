function CommentService($http) {
  //home.post
  this.postComment = function(comment) {
    return $http.post('/api/v1/comments.json', comment)
  }
  //home.comments
  this.getComments = function() {
    return $http.get('/api/v1/comments.json');
  }
  //home.comments
  this.update = function(id, comment) {
    return $http.put('/api/v1/comments/'+id+'.json', comment);
  }
  //home.comments
  this.delete = function(id) {
    return $http.delete('/api/v1/comments/'+id+'.json');
  }
}

angular
  .module('app')
  .service('CommentService', CommentService);
