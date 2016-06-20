function PostController(post, comments, Auth, $state, $http, $scope, $stateParams, SortCommentsService) {
  var ctrl = this;
  ctrl.data = post;
  ctrl.comment = {};

  $scope.signedIn = Auth.isAuthenticated;
  $scope.logout = Auth.logout;

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

  // GETS ALL COMMENTS FOR POST, RETURNS NEW POST WITH COMMENTS.
  ctrl.getComments = function() {
    return SortCommentsService.getSortedCommentsForPost(ctrl.data, comments);
  }

  ctrl.data = ctrl.getComments();

  //NECESSARY DUE TO PAGE RELOAD IF NOT INSIDE A FUNCTION
  ctrl.addHiddenData = function() {
    ctrl.comment.user_id = ctrl.user.id;
    ctrl.comment.post_id = ctrl.data.id;
  }

  //PATCHES NEW COMMENT TO COMMENTS MODEL, RETURNS TO SHOW PAGE. $SCOPE.$APPLY().
  ctrl.newComment = function() {
    ctrl.addHiddenData();
    $http.post('/api/v1/comments.json', ctrl.comment).then(function(comment) {
      // $state.go($state.current, {}, {reload:true});
      ctrl.data.comments.push(comment.data);
      console.log(ctrl.data.comments);

    });
    // $scope.$apply();
  }
}

angular
  .module('app')
  .controller('PostController', PostController);
