function CommentFactory($resource) {
  var newComment = $resource('http://localhost:3000/api/v1/comments/:id.json', {id: '@id'}, {
    update: { method: 'PUT' },
    delete: { method: 'DELETE' }
  });

  return newComment;
}

angular
  .module('app')
  .factory('CommentFactory', CommentFactory);
