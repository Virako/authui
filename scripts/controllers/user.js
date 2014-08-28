'use strict';

angular.module('authui.controllers')

    .controller('authenticateCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.modes = [
            {name: 'mail', step: 2},
            {name: 'sms', step: 3}
        ];
    }]);
