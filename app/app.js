'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'http-auth-interceptor',
  'myApp.view1',
  'myApp.view2',
  'myApp.logout',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]).run(function ($rootScope, $window) {
    
    // Call when the 401 response is returned by the server
    $rootScope.$on('event:auth-loginRequired', function(rejection) {
        $window.alert("Session timeout, will restart...");
	$window.location.reload();
    });

});

