/**
 * Created by Mukesh on 06/03/2016.
 */
(function (angular) {
    "use strict";

    angular.module("common.services")
           .service("authenticationService", authenticationService)
           .factory("authInterceptor", authInterceptorFactory);

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

        function logout() {
            _user.isAuthenticated = false;
            _user.userName = "";
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

    authInterceptorFactory.$inject = ['$q', '$location', 'authenticationService'];

    function authInterceptorFactory($q, $location, authenticationService) {
        return {
            request: function (config) {
                if (config !== undefined) {
                    config.headers = config.headers || {};
                    var token = authenticationService.getToken();
                    console.log(token);
                    if (token) {
                        config.headers['x-access-token'] = token;
                    }
                }
                return config;
            },
            response: function (response) {
                if (response != null &&
                    response.status == 200 &&
                    authenticationService.getToken() &&
                    !authenticationService.user.isAuthenticated)
                {
                    authenticationService.user.isAuthenticated = true;
                }
                return response || $q.when(response);
            },
            responseError: function (response) {
                if (response.status === 401 || response.status === 403) {
                    $location.path('/login');
                }
                return $q.reject(response);
            }
        };
    };


}(window.angular));