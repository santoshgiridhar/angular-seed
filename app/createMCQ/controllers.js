'use strict';

angular.module('myApp.createMCQ', ['ngRoute', 'myApp.createMCQ.directives'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/createMCQ', {
    templateUrl: 'createMCQ/view/main.html',
    controller: 'createMCQCtrl'
  });
}])

.controller('createMCQCtrl', ['$scope', function($scope) {

	$scope.optionalAnswer = 0;

	$scope.createQuestions = function(){
		var createObj = {};
		createObj.questions = $scope.question;
		createObj.answers = null  || $scope.optionalAnswer;
		console.log(createObj);
	};
}]);