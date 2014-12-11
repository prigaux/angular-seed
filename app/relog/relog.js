'use strict';

angular.module('myApp.relog', [])

.controller('RelogCtrl', function($scope, $window) {
    $scope.relog = function () {
	$window.location = "index.php";
    }
});
