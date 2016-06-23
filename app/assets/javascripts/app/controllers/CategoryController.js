function CategoryController(category) {
  var ctrl = this;
  ctrl.category = category.data;
}

angular
  .module('app')
  .controller('CategoryController', CategoryController);
