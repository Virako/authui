'use strict';

// Declare app level module which depends on filters, and services
angular.module('authui', [
    'ngRoute',
    'authui.controllers',
    'authui.directives',
    'authui.filters',
    'authui.services'
]).
config(['$routeProvider', function($routeProvider) {
    // User
    $routeProvider.when('/auth-event', {templateUrl: 'views/authenticate.html'});
    $routeProvider.when('/p/sms-code/verify', {templateUrl: 'views/smscode.html'});
    // Admin
    $routeProvider.when('/auth-event/id', {templateUrl: 'views/admin.html'});
    $routeProvider.when('/auth-event/sendemail', {templateUrl: 'views/sendemail.html'});
    $routeProvider.when('/auth-event/id/user', {templateUrl: 'views/admin-user.html'});
    $routeProvider.when('/auth-event/id/attempt', {templateUrl: 'views/admin-attempt.html'});

    $routeProvider.otherwise({redirectTo: '/'});
}]);

// Create modules
angular.module('authui.controllers', []);
angular.module('authui.directives', []);
angular.module('authui.filters', []);
angular.module('authui.services', []);
