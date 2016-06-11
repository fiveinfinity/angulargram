function PostsController(posts, comments, Auth) {
  var ctrl = this;

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

  posts.query({}, function(data) {
    ctrl.data = data;

  });

  comments.query({}, function(data) {
    ctrl.data.forEach(function(post) {
      post["comments"] = [];
      data.forEach(function(comment) {
        if(comment.post_id === post.id) {
          console.log(post.comments);
          post.comments.push(comment);
        }
      });
    });
  });
}

angular
  .module('app')
  .controller('PostsController', PostsController);
