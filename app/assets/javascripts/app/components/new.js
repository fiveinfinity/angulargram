function Upload() {
  return {
    templateUrl: 'upload.html',
    controller: function renderUpload() {

    },
    link: function(scope, elem, attrs, ctrl) {
      $(elem).html(renderUpload());
    }
  }
}

angular
  .module('app')
  .directive('upload', Upload);
