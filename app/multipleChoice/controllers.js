'use strict';

angular.module('myApp.multipleChoice', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/multipleChoice', {
    templateUrl: 'multipleChoice/view/main.html',
    controller: 'multipleChoiceCtrl'
  });
}])

.controller('multipleChoiceCtrl', ['$scope', '$http', function($scope, $http) {
	
	$scope.choiceList = [];
	$scope.selectedChoice = {};
	
	var init = function(){
		$http.get('fixture/getQuestions.json').success(function(data) {
			$scope.choiceList.length = 0;
			for (var i = 0; i < data.length; i++) { console.log(data[i]);
				$scope.choiceList.push(data[i]);
			}
			console.log($scope.choiceList);	
		});
	};

	$scope.submitAnswers = function(selectedChoice){

		console.log("selectedChoice - ", selectedChoice);

		var choiceArray = $.map(selectedChoice, function(value, index) {
    		return [value];
		});

		console.log("Array - ",choiceArray);
		//pass this array to service and compare the results
	};

	init();
}]);
