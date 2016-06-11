var Item = {
  bindings: {
    id: '='
  },
  templateUrl: 'components/item.html',
  controller: function(PostService) {
    var ctrl = this;
    ctrl.res = PostService.getPostById(this.id);
    ctrl.post = ctrl.res.get();
  },
  controllerAs: 'post'
};

angular
  .module('app')
  .component('item', Item);
