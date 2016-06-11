function CategoryController(category) {
  var ctrl = this;

  ctrl.category = category.get();
}

angular
  .module('app')
  .controller('CategoryController', CategoryController);
