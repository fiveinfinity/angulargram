function PostService($resource) {

  this.getPosts = function() {
    return $resource('http://localhost:3000/api/v1/posts.json');
  }

  this.getPostById = function(id) {
    return $resource('http://localhost:3000/api/v1/posts/'+id+'.json');
  }

  // this.newPost = function(post) {
  //   return $http.post('http://localhost:3000/api/v1/posts/new.json', post)
  //     .success(function(response) {
  //       console.log('new post successful!');
  //     });
  // }
}

angular
  .module('app')
  .service('PostService', PostService);
