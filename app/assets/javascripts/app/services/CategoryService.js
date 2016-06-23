function CategoryService($http) {
  //home.posts
  this.getCategories = function() {
    return $http.get('/api/v1/categories.json');
  }
  //home.category
  this.getCategoryById = function(id) {
    return $http.get('/api/v1/categories/'+id+'.json');
  }
}

angular
  .module('app')
  .service('CategoryService', CategoryService);
