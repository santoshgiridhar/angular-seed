'use strict';

angular.module('myApp.createMCQ.directives', [])

.directive('optionalAnswers', [function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
            value: '=' //use =? for optionality
      },
    templateUrl: 'createMCQ/view/optionalAnswers.html'
    // link: function (scope, element, attrs) {
    // 	console.log(element, scope, attrs);
    // 	//element.text(scope[attrs.value]);
    // }
  };
}]);
