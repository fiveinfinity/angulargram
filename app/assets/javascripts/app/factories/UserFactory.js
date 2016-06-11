function UserFactory() {
  var updateUser = $resource('http://localhost:3000/users.json', {id: '@id'}, {
    update: { method: 'PUT' }
  });

  return updateUser;
}

angular
  .module('app')
  .factory('UserFactory', UserFactory);
