'use strict';

var relogState = {};

angular.module('myApp.relog', [])

.controller('RelogCtrl', function($rootScope, $scope, $window, $modalInstance, $http, authService) {
    
    function windowOpenCleanup(state) {
	try {
	    if (state.listener) $window.removeEventListener("message", state.listener);  
	    if (state.window) state.window.close();
	    if ($modalInstance) $modalInstance.close();
	} catch (e) {}
    }

    function onmessage(e) {
	if (typeof e.data !== "string") return;
	var m = e.data.match(/^loggedUser=(.*)$/);
	if (!m) return;
	
	var user = angular.fromJson(m[1]);
	windowOpenCleanup(relogState);
	authService.loginConfirmed(user);
    };

    $scope.relog = function () {
	windowOpenCleanup(relogState);
	relogState.listener = onmessage;
	$window.addEventListener("message", onmessage);  
	relogState.window = $window.open('backend/login.php?postMessage');
    };
});
