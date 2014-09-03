'use strict';

angular.module('authui.filters')

    .filter('interpolate', ['version', function(version) {
        return function(text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        };
    }])

    .filter('MailsToList', function() {
         return function(input) {
             var input = input.replace(/\n|;|:/g, ',')
             var datas = input.split(',');
             var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
             var obj = [];
             angular.forEach(datas, function(data) {
                 if (data) {
                     obj.push({
                         mail: data,
                         correct: re.test(data)
                     });
                 }
             });
             return obj.reverse();
         };
    });
