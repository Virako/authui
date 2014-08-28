'use strict';

angular.module('authui.directives')

    .directive('authuiAuthenticate', function() {
        return {
            restrict: 'EA',
            //require: 'ngModel',
            //template: '<div class="some"></div>',
            templateUrl: 'templates/authui-authenticate-tpl.html',
            link: function(scope, element) {
                scope.values = ["a", "b", "c", "d"];
            }
        };
    })

    .directive('authuiSmscode', function() {
        return {
            restrict: 'EA',
            //require: 'ngModel',
            //template: '<div class="some"></div>',
            templateUrl: 'templates/authui-smscode-tpl.html',
            link: function(scope, element) {
                scope.values = ["a", "b", "c", "d"];
            }
        };
    });
