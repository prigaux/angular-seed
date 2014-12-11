'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

    it('should ....', inject(function($rootScope, $controller) {
      //spec body
      var scope = $rootScope.$new();
      var user = {'id': "foo"};
      var view1Ctrl = $controller('View1Ctrl', {$scope: scope, user: user});
      expect(view1Ctrl).toBeDefined();
    }));

  });
});
