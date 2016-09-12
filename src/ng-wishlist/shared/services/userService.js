/**
 * Created by Mukesh on 06/03/2016.
 */
(function () {
    "use strict";

    angular.module("common.services")
           .service("userService", userService);

    userService.$inject = ['$resource', 'API_ENDPOINT'];

    function userService($resource, API_ENDPOINT) {

        this.registerUser = function (user) {
            return $resource(API_ENDPOINT + '/signup').save(user);
        };

    };
}());