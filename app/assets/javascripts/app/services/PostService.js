function PostService($http) {
  //home.posts, home.profile
  this.getPosts = function() {
    return $http.get('/api/v1/posts.json');
  }
  //home.post
  this.getPostById = function(id) {
    return $http.get('/api/v1/posts/'+id+'.json');
  }
  //home.edit
  this.updatePost = function(id, post) {
    return $http.put('/api/v1/posts/'+id+'.json', post);
  }
  //home.edit
  this.deletePost = function(id) {
    return $http.delete('/api/v1/posts/'+id+'.json');
  }
  //home.new
  this.newPost = function(post) {
    return $http.post('/api/v1/posts.json', post);
  }

  //home.profile - sorts users' posts from all posts.
  this.getUsersPosts = function(posts, id) {
    return posts.map(function(post) {
      if(post.user_id === id) {
        return post;
      }
    });
  }
}

angular
  .module('app')
  .service('PostService', PostService);
