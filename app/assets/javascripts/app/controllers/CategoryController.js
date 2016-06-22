function CategoryController(category) {
  var ctrl = this;
  ctrl.category = category;
}

angular
  .module('app')
  .controller('CategoryController', CategoryController);
