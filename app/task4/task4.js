'use strict';

angular.module('myApp.task4', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/task4', {
    templateUrl: 'task4/task4.html',
    controller: 'Task4Ctrl'
  });
}])

.controller('Task4Ctrl', [function() {

}]);
