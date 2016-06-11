function PostController(post, comments, Auth, $state, $http, $scope, $stateParams) {
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

  ctrl.comment = {};

  ctrl.newComment = function() {
    ctrl.comment.user_id = ctrl.user.id;
    ctrl.comment.post_id = ctrl.data.id;
    $http.post('/api/v1/comments.json', ctrl.comment).then(function(res) {
      $state.go($state.current, {}, {reload:true});
    });
  }
}

angular
  .module('app')
  .controller('PostController', PostController);
