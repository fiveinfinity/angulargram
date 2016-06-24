function CategoryController(category, Auth) {
  var ctrl = this;
  ctrl.category = category.data;

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });
}

angular
  .module('app')
  .controller('CategoryController', CategoryController);
