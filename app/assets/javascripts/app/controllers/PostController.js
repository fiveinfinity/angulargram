function PostController(post, comments, Auth) {
  var ctrl = this;
  ctrl.data = post.get();

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

  comments.query({}, function(res) {
      ctrl.data["comments"] = [];
      res.forEach(function(comment) {
        if(comment.post_id === ctrl.data.id) {
          ctrl.data.comments.push(comment);
        }
      });
  });


}

angular
  .module('app')
  .controller('PostController', PostController);
