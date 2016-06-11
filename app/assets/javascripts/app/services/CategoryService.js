function CategoryService($resource) {
  this.getCategories = function() {
    return $resource('/api/v1/categories.json');
  }

  this.getCategoriesById = function(id) {
    return $resource('/api/v1/categories/'+id+'.json');
  }
}

angular
  .module('app')
  .service('CategoryService', CategoryService);
