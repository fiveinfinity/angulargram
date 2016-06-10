function NewPostFactory($resource) {
  var newPost = $resource('http://localhost:3000/api/v1/posts/:id.json', {id: '@id'}, {
    update: { method: 'PUT' },
    delete: { method: 'DELETE' }
  });

  return newPost;
}

angular
  .module('app')
  .factory('NewPostFactory', NewPostFactory);
