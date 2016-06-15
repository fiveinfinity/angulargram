function PostService($resource) {
  this.getPosts = function() {
    return $resource('http://localhost:3000/api/v1/posts.json');
  }

  this.getPostById = function(id) {
    return $resource('http://localhost:3000/api/v1/posts/'+id+'.json');
  }
}

angular
  .module('app')
  .service('PostService', PostService);
