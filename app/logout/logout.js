'use strict';

angular.module('myApp.logout', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/logout', {
    templateUrl: 'logout/logout.html',
    controller: 'LogoutCtrl'
  });
}])

.controller('LogoutCtrl', function($http, $scope) {
    $scope.status = 'in progress';    
    $http.get('backend/logout.php').success(function () {
	$scope.status = 'success';
    }).error(function (data) {
	$scope.status = 'failure: ' + data;
    });
});
