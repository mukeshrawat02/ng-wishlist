(function (angular) {
    "use strict";

    var app = angular.module("favListerApp",
                            [
                                "common.services",
                                "ui.router",
                                "ui.bootstrap",
                                'ngAnimate',
                                'ngAria',
                                'ngStorage',
                                'ngMaterial',
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
                             templateUrl: "../app_client/dashboard/dashboard.html",
                             controller: "DashboardController as vm"
                         })
                         // create note
                         .state("createNote", {
                             url: "/createNote",
                             templateUrl: "../app_client/note/note.html",
                             controller: "NoteController as vm"
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
                             templateUrl: "../app_client/forgotPassword/forgotPassword.html",
                             controller: "ForgotPasswordController as vm"
                         });
                     //$locationProvider.html5Mode(true);
                 }]
    );

    app.config(['$provide', '$httpProvider', function ($provide, $httpProvider) {
        $provide.factory('authInterceptor',
                          ['$q', '$location', '$localStorage',
                              function ($q, $location, $localStorage) {
                                  return {
                                      request: function (config) {
                                          if (config !== undefined) {
                                              config.headers = config.headers || {};
                                              var token = $localStorage.access_token;
                                              if (token) {
                                                  config.headers['x-access-token'] = token;
                                              }
                                          }
                                          return config;
                                      },
                                      responseError: function (response) {
                                          if (response.status === 401 || response.status === 403) {
                                              $location.path('/login');
                                          }
                                          else if (response.status <= 0) {
                                              console.log('Error connecting to server');
                                              return;
                                          }
                                          return $q.reject(response);
                                      }
                                  };
                              }]);
        $httpProvider.interceptors.push('authInterceptor');
    }]);

    app.config(['$mdThemingProvider', function ($mdThemingProvider) {
        var redTheme = $mdThemingProvider.theme('redTheme', 'default');
        var redPalette = $mdThemingProvider.extendPalette('grey', {
            '50': '#ffffff',
            '100': '#87b065',
            '200': '#7aa755',
            '300': '#6e964c',
            '400': '#618544',
            '500': '#55743b',
            '600': '#496332',
            '700': '#3c522a',
            '800': '#304121',
            '900': '#233019',
            'A100': '#a1c286',
            'A200': '#afca97',
            'A400': '#bcd3a8',
            'A700': '#171f10',
        });
        $mdThemingProvider.definePalette('redPalette', redPalette);
        redTheme.backgroundPalette('redPalette');

        var neonRedMap = $mdThemingProvider.extendPalette('red', {
            '500': '#E23A0B',
            'contrastDefaultColor': 'light'
        });
        // Register the new color palette map with the name <code>neonRed</code>
        $mdThemingProvider.definePalette('neonRed', neonRedMap);

        $mdThemingProvider.theme('default')
         .primaryPalette('neonRed')
         .warnPalette('red')
         .accentPalette('teal', {
             'default': '900',
         });

    }]);

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