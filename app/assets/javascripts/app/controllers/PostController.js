function PostController(post, comments, Auth, $state, $http, $scope, $stateParams) {
  var ctrl = this;
  ctrl.data = post.get();
  ctrl.comment = {};

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
    $scope.$digest();
  });

  //NECESSARY DUE TO PAGE RELOAD IF NOT INSIDE A FUNCTION
  ctrl.addHiddenData = function() {
    ctrl.comment.user_id = ctrl.user.id;
    ctrl.comment.post_id = ctrl.data.id;
  }

  ctrl.newComment = function() {
    ctrl.addHiddenData();
    $http.post('/api/v1/comments.json', ctrl.comment).then(function() {
      $state.go($state.current, {}, {reload:true});
    });
    $scope.$apply();
  }
}

angular
  .module('app')
  .controller('PostController', PostController);
