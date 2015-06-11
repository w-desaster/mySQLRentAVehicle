'use strict';

angular.module('rentavehicleApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
