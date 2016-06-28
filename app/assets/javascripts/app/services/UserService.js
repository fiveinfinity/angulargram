function UserService($http) {
  this.getUsers = function(id) {
    return $http.get('/api/v1/users.json');
  }
}

angular
  .module('app')
  .service('UserService', UserService);
