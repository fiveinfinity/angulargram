function PostsController($scope, posts, comments, categories, Auth) {
  var ctrl = this;

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

  categories.query({}, function(data) {
    ctrl.categories = data;
  })

  posts.query({}, function(data) {
    ctrl.data = data;

  });

  comments.query({}, function(data) {
    ctrl.data.forEach(function(post) {
      post["comments"] = [];
      data.forEach(function(comment) {
        if(comment.post_id === post.id) {
          post.comments.push(comment);
        }
      });
    });
  });
}

angular
  .module('app')
  .controller('PostsController', PostsController);
