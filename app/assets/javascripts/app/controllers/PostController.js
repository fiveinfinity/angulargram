function PostController(post, comments, Auth, CommentFactory, $location) {
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

  ctrl.comment = new CommentFactory();

  ctrl.newComment = function() {
    console.log('inside');
    console.log(ctrl.comment);
      ctrl.comment.$save(function() {
      $location.path('post');
    })
  }


}

angular
  .module('app')
  .controller('PostController', PostController);
