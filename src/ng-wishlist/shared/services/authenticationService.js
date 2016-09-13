/**
 * Created by Mukesh on 06/03/2016.
 */
(function (angular) {
    "use strict";

    angular.module("common.services")
           .service("authenticationService", authenticationService);

    authenticationService.$inject = ['$resource', 'API_ENDPOINT', '$localStorage'];

    function authenticationService($resource, API_ENDPOINT, $localStorage) {

        var _authentication = {
            isAuth: false,
            userName: "",
            access_token: ""
        };

        this.login = function (user) {
            return $resource(API_ENDPOINT + '/login')
                    .save(user)
                    .$promise
                    .then(function (response) {
                        _authentication.isAuth = true;
                        _authentication.userName = user.username;
                        _authentication.access_token = response.token;
                       
                        $localStorage.authorizationData = _authentication;
                    });
        };

        this.authentication = _authentication;
    };

}(window.angular));