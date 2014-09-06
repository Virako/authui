'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
    beforeEach(module('authui.controllers'));

    // User
    it('should ....', inject(function($controller) {
        //spec body
        var authenticateCtrl = $controller('authenticateCtrl', { $scope: {} });
        expect(authenticateCtrl).toBeDefined();
    }));

    // Admin
    it('should ....', inject(function($controller) {
        //spec body
        var MsgCtrl = $controller('MsgCtrl', { $scope: {} });
        expect(MsgCtrl).toBeDefined();
    }));

    it('should ....', inject(function($controller) {
        //spec body
        var MailCtrl = $controller('MailCtrl', { $scope: {} });
        expect(MailCtrl).toBeDefined();
    }));
});
