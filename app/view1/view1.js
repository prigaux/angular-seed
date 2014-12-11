'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
    resolve: {
	user: function($http) {
	    return $http.get('backend/user.php').then(function (user)  {
		return user.data;
	    });
	}
    }
  });
}])

.controller('View1Ctrl', function($scope, user) {
    $scope.user = user;
});
