(function (angular) {
    "use strict";

    var app = angular.module("favListerApp",
                            [
                                "common.services",
                                "ui.router",
                                "ui.bootstrap",
                                'ngAnimate',
                                'ngStorage'
                            ]);

    app.config(["$stateProvider",
                "$urlRouterProvider",
                "$locationProvider",
                 function ($stateProvider, $urlRouterProvider, $locationProvider) {

                     $urlRouterProvider.otherwise("/home");

                     $stateProvider
                         // home
                         .state("home", {
                             url: "/home",
                             templateUrl: "../app_client/home/home.html"
                         })
                         // dashboard
                         .state("dashboard", {
                             url: "/dashboard",
                             templateUrl: "../app_client/dashboard/dashboard.html"
                         })
                         // login
                         .state("login", {
                             url: "/login",
                             templateUrl: "../app_client/login/login.html",
                             controller: "LoginController as vm"
                         })
                         // registration
                         .state("register", {
                             url: "/register",
                             templateUrl: "../app_client/registration/registration.html",
                             controller: "RegistrationController as vm"
                         })
                        //forgot Password
                         .state("forgotPassword", {
                             url: "/forgotPassword",
                             templateUrl: "../app_client/login/forgotPassword.html",
                             controller: "ForgotPasswordController as vm"
                         });
                     //$locationProvider.html5Mode(true);
                 }]
    );

    app.config(['$provide', '$httpProvider', function ($provide, $httpProvider) {
        $provide.factory('authInterceptor',
                          ['$q', '$location', 'authenticationService',
                              function ($q, $location, authenticationService) {
                                  return {
                                      'request': function (config) {
                                          config.headers = config.headers || {};
                                          var token = authenticationService.getToken();
                                          if (token) {
                                              config.header['x-access-token'] = token;
                                          }
                                          return config;
                                      },
                                      'responseError': function (response) {
                                          if (response.status === 401 || response.status === 403) {
                                              $location.path('/login');
                                          }
                                          return $q.reject(response);
                                      }
                                  };
                              }]);
        $httpProvider.interceptors.push('authInterceptor');
    }]);

    app.run(function ($rootScope, $location, $localStorage, authenticationService) {
        $rootScope.$on("$routeChangeStart",
                    function (event, nextRoute, currentRoute) {
                        //redirect only if both isAuthenticated is false and no token is set
                        if (!authenticationService.isAuthenticated &&
                            !$localStorage.access_token) {
                            $location.path("/login");
                        }
                    });
    });

}(window.angular));