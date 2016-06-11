function ProfileController($scope, posts, Auth, $resource) {
  var ctrl = this;
  ctrl.data = [];

  Auth.currentUser()
    .then(function(user) {
      $scope.user = user;
      ctrl.user = user;
    });

  //GET USERS POSTS
  var Posts = $resource('/api/v1/posts.json');
  var posts = Posts.query({}, function(res) {
    posts.forEach(function(post) {
      if (post.user_id === ctrl.user.id) {
        ctrl.data.push(post);
      }
    });
  });
}

angular
  .module('app')
  .controller('ProfileController', ProfileController);
