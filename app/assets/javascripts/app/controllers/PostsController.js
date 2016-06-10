function PostsController(posts) {

  //could not get the resolve in app.js working properly. Would not load state.
  var ctrl = this;
  console.log(posts.data);
  ctrl.data = posts.data;
}

angular
  .module('app')
  .controller('PostsController', PostsController);
