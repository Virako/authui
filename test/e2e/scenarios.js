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

        // Message
        it('test if textarea message work', function() {
            var textarea = element(by.model('message'));
            textarea.sendKeys("test");
            expect(textarea.getAttribute('value')).toBe('test');
        });

        it('should check ng-bind-html', function() {
            var textarea = element(by.model('message'));
            textarea.sendKeys("<div>Test in <b>html</b></div>");
            expect(element(by.binding('trustedHtml')).getText()).toBe('Test in html');
        });

        it('should check ng-bind-html work with line break', function() {
            var textarea = element(by.model('message'));
            textarea.sendKeys("<div>Line 1</br>Line 2</div>");
            expect(element(by.binding('trustedHtml')).getText()).toBe('Line 1\nLine 2');
        });

        // Mails
        it('test if textarea mails work', function() {
            var textarea = element(by.model('mails'));
            textarea.sendKeys("test@world.www");
            expect(textarea.getAttribute('value')).toBe('test@world.www');
        });

        it('test if binding mails work with line break', function() {
            var textarea = element(by.model('mails'));
            textarea.sendKeys("test@test.com\ntest2@test.com");
            expect(element.all(by.repeater('m in mailList')).count()).toEqual(2);
        });

        it('test if binding mails work with comma', function() {
            var textarea = element(by.model('mails'));
            textarea.sendKeys("test@test.com,test2@test.com");
            expect(element.all(by.repeater('m in mailList')).count()).toEqual(2);
        });

        it('test if binding mails not work with whitespace', function() {
            var textarea = element(by.model('mails'));
            textarea.sendKeys("test@test.com test2@test.com");
            expect(element.all(by.repeater('m in mailList')).count()).toEqual(1);
        });

        it('test if binding mails work with semicolon', function() {
            var textarea = element(by.model('mails'));
            textarea.sendKeys("test@test.com;test2@test.com");
            expect(element.all(by.repeater('m in mailList')).count()).toEqual(2);
        });

        it('test if binding mails work with colon', function() {
            var textarea = element(by.model('mails'));
            textarea.sendKeys("test@test.com:test2@test.com");
            expect(element.all(by.repeater('m in mailList')).count()).toEqual(2);
        });

        it('test if binding mails work with semicolon, colon, comma and line break', function() {
            var textarea = element(by.model('mails'));
            textarea.sendKeys("test@test.com;test2@test.com:test3@test.com,test4@test.com\ntest5@test.com");
            expect(element.all(by.repeater('m in mailList')).count()).toEqual(5);
        });

        it('test valid mail', function() {
            var textarea = element(by.model('mails'));
            textarea.sendKeys("test@test.com");
            var valid = element(by.repeater('m in mailList').row(0).column('{{ m.mail }}'));
            var lightgreen = 'rgba(144, 238, 144, 1)';
            expect(valid.getCssValue('background-color')).toBe(lightgreen); //

        });

        it('test invalid mail', function() {
            var textarea = element(by.model('mails'));
            textarea.sendKeys("test@@test.com");
            var valid = element(by.repeater('m in mailList').row(0).column('{{ m.mail }}'));
            var salmon = 'rgba(250, 128, 114, 1)';
            expect(valid.getCssValue('background-color')).toBe(salmon); //
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
