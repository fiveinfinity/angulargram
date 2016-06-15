function SortCommentsService() {
  this.getSortedComments = function(posts, comments) {
    posts.forEach(function(post) {
      post["comments"] = [];
      comments.forEach(function(comment) {
        if(comment.post_id === post.id)
        post.comments.push(comment);
      })
    });
    return posts;
  }

}

angular
  .module('app')
  .service('SortCommentsService', SortCommentsService);
