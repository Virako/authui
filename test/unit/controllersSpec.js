'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
    beforeEach(module('authui.controllers'));

    // User
    it('should ....', inject(function($controller) {
        //spec body
        var userCtrl = $controller('userCtrl', { $scope: {} });
        expect(userCtrl).toBeDefined();
    }));

    // Admin
    it('should ....', inject(function($controller) {
        //spec body
        var adminCtrl = $controller('adminCtrl', { $scope: {} });
        expect(adminCtrl).toBeDefined();
    }));
});
