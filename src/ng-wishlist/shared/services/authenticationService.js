/**
 * Created by Mukesh on 06/03/2016.
 */
(function (angular) {
    "use strict";

    angular.module("common.services")
           .service("authenticationService", authenticationService);

    authenticationService.$inject = ['$resource', 'API_ENDPOINT', '$localStorage', '$location'];

    function authenticationService($resource, API_ENDPOINT, $localStorage, $location) {

        var _user = {
            isAuthenticated: false,
            username: ""
        };

        function login(user) {
            return $resource(API_ENDPOINT + '/login')
                .save(user)
                .$promise
                .then(function (response) {
                    _user.isAuthenticated = true;
                    _user.username = user.username;

                    setToken(response.token);
                });
        };

        function setToken(token) {
            $localStorage.access_token = token;
        };

        function getToken() {
            return $localStorage.access_token;
        };

        function getUserStatus() {
            if (getToken()) {

            }
        }

        function logout() {
            _user.isAuthenticated = false;
            _user.username = "";
            delete $localStorage.access_token;
            $location.path('/home');
        };

        return {
            login: login,
            setToken: setToken,
            getToken: getToken,
            logout: logout,
            user: _user
        };
    };

}(window.angular));