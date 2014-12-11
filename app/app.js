'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'http-auth-interceptor',
  'ui.bootstrap',
  'myApp.relog',
  'myApp.view1',
  'myApp.view2',
  'myApp.logout',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]).run(function ($rootScope, $modal, authService, $http) {
    
    // Call when the 401 response is returned by the server
    $rootScope.$on('event:auth-loginRequired', function(rejection) {

	// first try jsonp
	$http.jsonp('backend/login.php?callback=JSON_CALLBACK').then(function (resp) {
	    authService.loginConfirmed(resp.data);
	}, function () {
	    // jsonp failed,
	    $modal.open({ templateUrl: 'relog/relog.html', controller: 'RelogCtrl', backdrop: false });
	});
    });

});

