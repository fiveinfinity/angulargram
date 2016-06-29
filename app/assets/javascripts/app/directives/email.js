function email() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {
            ngModel.$validators.email = function (value) {
              var regex = /.+@.+\..+/i;
              return regex.test(value);
            };
        }
    }
}

angular
    .module('app')
    .directive('email', email);
