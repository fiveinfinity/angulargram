function PostService($http) {
    return $http.get('http://localhost:3000/api/v1/posts.json');
}

angular
  .module('app')
  .service('PostService', PostService);
