'use strict';

describe('authui', function() {

    browser.get('index.html');
    it('should automatically redirect to #/ when location hash/fragment is empty', function() {
        expect(browser.getLocationAbsUrl()).toMatch("#/");
    });

    // Admin
    describe('auth-sendmail', function() {

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

        it('test if binding message work', function() {
            var textarea = element(by.model('message'));
            textarea.sendKeys("test");
            var p = element(by.binding('message'));
            expect(p.getText()).toBe('The Next message:\ntest\nsend to:');
        });

        // TODO
        it('test if binding mails work', function() {
            var textarea = element(by.model('mails'));
            textarea.sendKeys("test@test.com\ntest2@test.com");
            var p = element(by.binding('message'));
            expect(p.getText()).toBe('The Next message:\n\nsend to:\ntest@test.com, test2@test.com');
        });
    });


});
