'use strict';

describe('authui', function() {

    browser.get('index.html');
    it('should automatically redirect to #/ when location hash/fragment is empty', function() {
        expect(browser.getLocationAbsUrl()).toMatch("#/");
    });

    // Admin
    describe('admin-sendamil', function() {

        beforeEach(function() {
            browser.get('#/auth-event/sendemail');
        });

        it('test if textarea message work', function() {
            var textarea = element(by.model('message'));
            textarea.sendKeys("test");
            expect(textarea.getAttribute('value')).toBe('test');
        });

        it('test if textarea mails work', function() {
            var textarea = element(by.model('mails'));
            textarea.sendKeys("test@world.www");
            expect(textarea.getAttribute('value')).toBe('test@world.www');
        });

        it('test if binding mails work with line break', function() {
            var textarea = element(by.model('message'));
            textarea.sendKeys("test");
            var p = element(by.binding('message'));
            expect(p.getText()).toBe('The message:\ntest');
        });

        // TODO
        it('test if binding mails work with line break', function() {
            var textarea = element(by.model('mails'));
            textarea.sendKeys("test@test.com\ntest2@test.com");
            var p = element(by.binding('mails'));
            expect(p.getText()).toBe('Send to:\ntest@test.com, test2@test.com');
        });

        it('test if binding mails work with comma', function() {
            var textarea = element(by.model('mails'));
            textarea.sendKeys("test@test.com,test2@test.com");
            var p = element(by.binding('mails'));
            expect(p.getText()).toBe('Send to:\ntest@test.com, test2@test.com');
        });

        it('test if binding mails work with space', function() {
            var textarea = element(by.model('mails'));
            textarea.sendKeys("test@test.com test2@test.com");
            var p = element(by.binding('mails'));
            expect(p.getText()).toBe('Send to:\ntest@test.com, test2@test.com');
        });

        it('test if binding mails work with tabulation', function() {
            var textarea = element(by.model('mails'));
            textarea.sendKeys("test@test.com\ttest2@test.com");
            var p = element(by.binding('mails'));
            expect(p.getText()).toBe('Send to:\ntest@test.com, test2@test.com');
        });
    });

    var selectDropdownbyNum = function ( element, optionNum ) {
        if (optionNum){
            var options = element.findElements(by.tagName('option'))
                .then(function(options){
                    options[optionNum].click();
                });
        }
    };

    // User
    describe('user-authenticate', function() {

        beforeEach(function() {
            browser.get('#/auth-event');
        });

        it('default option select', function() {
            var select = element(by.model('authenticate'));
            expect(element(by.selectedOption('authenticate')).getText()).toEqual('-- choose authenticate mode --');
            //expect(select.evaluate('model.selected')).toEqual('mail');
        });

        it('should select the first option in select', function() {
            var select = element(by.model('authenticate'));
            selectDropdownbyNum(select, 1);
            expect(element(by.selectedOption('authenticate')).getText()).toEqual('mail');
        });

        it('should select the second option in select', function() {
            var select = element(by.model('authenticate'));
            selectDropdownbyNum(select, 2);
            expect(element(by.selectedOption('authenticate')).getText()).toEqual('sms');
        });
    });

});
