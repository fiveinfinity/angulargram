function CategoryController(category, posts, comments, SortPostService, SortCommentsService) {
  var ctrl = this;
  ctrl.category = category;

  // GETS ALL CATEGORIES' POSTS, SANS COMMENTS
  ctrl.getPosts = function() {
    return SortPostService.getSortedPosts(posts, ctrl.category);
  }
  ctrl.nonCommentedPosts = ctrl.getPosts();

  // GETS ALL COMMENTS FOR EACH POST, RETURNS NEW POSTS.
  ctrl.getComments = function() {
    return SortCommentsService.getSortedComments(ctrl.nonCommentedPosts, comments);
  }

  ctrl.posts = ctrl.getComments();
}

angular
  .module('app')
  .controller('CategoryController', CategoryController);
