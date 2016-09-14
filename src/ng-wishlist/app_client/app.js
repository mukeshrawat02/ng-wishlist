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

    app.config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });

    app.run(function ($rootScope, $location, authenticationService) {
        $rootScope.$on("$routeChangeStart",
                    function (event, nextRoute, currentRoute) {
                        //redirect only if both isAuthenticated is false and no token is set
                        if (!authenticationService.user.isAuthenticated &&
                            !authenticationService.getToken()) {
                            $location.path("/login");
                        }
                    });
    });

}(window.angular));