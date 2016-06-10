function PostService($http) {
  this.getPosts = function() {
    return $http.get('http://localhost:3000/api/v1/posts.json');
  }

  this.getPostById = function(id) {
    return $http.get('http://localhost:3000/api/v1/posts/'+id+'.json')
  }
}

angular
  .module('app')
  .service('PostService', PostService);
