/**
 * Created by Mukesh on 06/03/2016.
 */
(function () {
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
                             templateUrl: "app/home/landingView.html"
                         })
                         // login
                         .state("login", {
                             url: "/login",
                             templateUrl: "app/login/loginView.html",
                             controller: "LoginController as self"
                         })
                         // registration
                         .state("register", {
                             url: "/register",
                             templateUrl: "app/registration/registrationView.html",
                             controller: "RegistrationController as self"
                         });

                     $locationProvider.html5Mode(true);
                 }]
    );

}());