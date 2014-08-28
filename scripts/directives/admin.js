'use strict';

angular.module('authui.directives')

    .directive('authuiAdmin', function() {
        return {
            restrict: 'EA',
            //require: 'ngModel',
            //template: '<div class="some"></div>',
            templateUrl: 'templates/authui-admin-tpl.html',
            link: function(scope, element) {
                scope.values = ["a", "b", "c", "d"];
            }
        };
    })

    .directive('authuiSendemail', function() {
        return {
            restrict: 'EA',
            //require: 'ngModel',
            //template: '<div class="some"></div>',
            scope: true,
            templateUrl: 'templates/authui-sendemail-tpl.html',
            link: function(scope, element) {
                scope.values = ["a", "b", "c", "d"];
            }
        };
    })

    .directive('authuiAdminUser', function() {
        return {
            restrict: 'EA',
            //require: 'ngModel',
            //template: '<div class="some"></div>',
            templateUrl: 'templates/authui-admin-user-tpl.html',
            link: function(scope, element) {
                scope.values = ["a", "b", "c", "d"];
            }
        };
    })

    .directive('authuiAdminAttempt', function() {
        return {
            restrict: 'EA',
            //require: 'ngModel',
            //template: '<div class="some"></div>',
            templateUrl: 'templates/authui-admin-attempt-tpl.html',
            link: function(scope, element) {
                scope.values = ["a", "b", "c", "d"];
            }
        };
    });
