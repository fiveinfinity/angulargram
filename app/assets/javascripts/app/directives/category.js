function Category() {
  return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ctrl) {
          element.bind('blur', function() {
            ctrl.$setValidity('duplicate', scope.new.duplicateCategory(ctrl.$modelValue));
            scope.$digest();
          });
        }
  }
}

angular
  .module('app')
  .directive('category', Category);
