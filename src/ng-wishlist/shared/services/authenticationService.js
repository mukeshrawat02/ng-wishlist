/**
 * Created by Mukesh on 06/03/2016.
 */
(function (angular) {
    "use strict";

    angular.module("common.services")
           .factory("authenticationService",
                    ['$resource', 'API_ENDPOINT', authenticationService]);

    function authenticationService(API_ENDPOINT) {
        var isAuthenticated = false;
        var authToken;
    };

}(window.angular));