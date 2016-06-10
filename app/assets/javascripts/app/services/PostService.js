function PostService($http) {
  this.getPosts = function() {
    return $http.get('http://localhost:3000/api/v1/posts.json');
  }

  this.getPostById = function(id) {
    return $http.get('http://localhost:3000/api/v1/posts/'+id+'.json')
  }

  this.newPost = function(post) {
    return $http.post('http://localhost:3000/api/v1/posts/new.json', data: post)
  }
}

angular
  .module('app')
  .service('PostService', PostService);
