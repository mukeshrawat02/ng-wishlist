/**
 * Created by Mukesh on 06/03/2016.
 */
(function (angular) {
    "use strict";

    var app = angular.module("favListerApp",
                            [
                                "common.services",
                                "ui.router",
                                "ui.bootstrap"
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
                             templateUrl: "../app_client/home/landingView.html"
                         })
                         // login
                         .state("login", {
                             url: "/login",
                             templateUrl: "../app_client/login/loginView.html",
                             controller: "LoginController as self"
                         })
                         // registration
                         .state("register", {
                             url: "/register",
                             templateUrl: "../app_client/registration/registrationView.html",
                             controller: "RegistrationController as self"
                         })
                        //forgot Password
                         .state("forgotPassword", {
                             url: "/forgotPassword",
                             templateUrl: "../app_client/login/forgotPassword.html",
                             controller: "ForgotPasswordController as self"
                         });
                     //$locationProvider.html5Mode(true);
                 }]
    );

}(window.angular));