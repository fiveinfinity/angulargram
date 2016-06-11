function CategoryController(category, posts) {
  var ctrl = this;

  ctrl.category = category.get();

  posts.query({}, function(res) {
    ctrl.posts = [];
    res.forEach(function(post) {
      post.categories.forEach(function(category) {
        if(category.id === ctrl.category.id) {
          ctrl.posts.push(post);
        }
      })
    })
  });
}

angular
  .module('app')
  .controller('CategoryController', CategoryController);
