/**
 * Created by Mukesh on 06/03/2016.
 */
(function (angular) {
    "use strict";

    angular.module("common.services")
           .service("authenticationService", authenticationService);

    authenticationService.$inject = ['$resource', 'API_ENDPOINT'];

    function authenticationService($resource, API_ENDPOINT) {

        this.login = function (user) {
            return $resource(API_ENDPOINT + '/login').save(user);
        };
    };

}(window.angular));