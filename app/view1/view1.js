'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($http, $scope, $window) {
    $http.get('backend/user.php').success(function (user) {
	$scope.user = user;
    });

    $scope.restart = function() {
	$window.location.reload();
    }
});
