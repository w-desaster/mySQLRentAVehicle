'use strict';

angular.module('rentavehicleApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


