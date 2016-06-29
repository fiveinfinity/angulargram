function UserService($http) {
  this.getUsers = function() {
    return $http.get('/api/v1/users.json');
  }

  this.getUser = function(id) {
    return $http.get('/api/v1/users/'+id+'.json')
  }
}

angular
  .module('app')
  .service('UserService', UserService);
