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

  this.getSortedCommentsForPost = function(post, comments) {
    post["comments"] = [];
    comments.forEach(function(comment) {
      if(comment.post_id === post.id)
      post.comments.push(comment);
    });
  return post;
  }

}

angular
  .module('app')
  .service('SortCommentsService', SortCommentsService);
