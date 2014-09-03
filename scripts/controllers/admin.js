'use strict';

angular.module('authui.controllers')

    .controller('MsgCtrl', ['$scope', '$sce', function($scope, $sce) {
        $scope.message = 'Message in html.';

        $scope.html2msg = function() {
            return $sce.trustAsHtml($scope.message);
        };
    }])

    .controller('MailCtrl', function($scope, $filter) {
        $scope.mails = '';

        $scope.$watch('mails', function(val) {
            $scope.mailList = $filter('MailsToList')(val);
        });
    });
