function SortPostService() {
  this.getSortedPosts = function(posts, category) {
    var sortedArray = [];
    posts.forEach(function(post) {
      post.categories.forEach(function(postCat) {
        if(postCat.id === category.id) {
          sortedArray.push(post);
        }
      });
    });
    return sortedArray;
  }

}

angular
  .module('app')
  .service('SortPostService', SortPostService);
