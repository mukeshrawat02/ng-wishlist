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
                    setToken(response.token);
                });
        };

        function setToken(token) {
            $localStorage.access_token = token;
        };

        function getToken() {
            return $localStorage.access_token;
        };

        function getUser() {
            if (getToken()) {
                return $resource(API_ENDPOINT + '/me').get();
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
            logout: logout,
            currentUser: getUser
        };
    };

}(window.angular));