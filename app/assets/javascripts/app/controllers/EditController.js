function EditController($stateParams, NewPostFactory, $state) {
  var ctrl = this;
  ctrl.data = NewPostFactory.get({id: $stateParams.id})
  ctrl.id = ctrl.data.id;

  ctrl.updatePost = function() {
    ctrl.data.$update({id: ctrl.data.id}, function() {
      $state.go('home.profile');
    });
  }

  ctrl.delete = function() {
    ctrl.data.$delete(function() {
      $state.go('home.profile');
    });
  }
}

angular
  .module('app')
  .controller('EditController', EditController);
