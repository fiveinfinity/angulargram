function NewController(categories, Auth, $state, PostService) {
  var ctrl = this;
  ctrl.post = {};
  ctrl.categories = categories.data;

  ctrl.submit = function() {
    PostService.newPost(ctrl.post).then(function(post) {
      if(post.data.size) {
        ctrl.error = post.data.size[0];
      } else {
        $state.go('home.posts');
      }
    });
  }
  // CHECKS IF NEW CATEGORY IS UNIQUE
  ctrl.duplicateCategory = function(category) {
    for(var i in ctrl.categories) {
      if(ctrl.categories[i].title == category)
      return false;
    }
    return true;
  }
}

angular
  .module('app')
  .controller('NewController', NewController);
